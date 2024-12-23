import tensorflow as tf
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import Layer
from tensorflow.keras.models import Model
from tensorflow.keras.applications.resnet50 import preprocess_input
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from PIL import Image
import numpy as np
import argparse
import pickle
import os


# Define a Triplet Loss function
def triplet_loss(anchor, positive, negative, margin=0.2):
    positive_dist = tf.reduce_sum(tf.square(anchor - positive), axis=1)
    negative_dist = tf.reduce_sum(tf.square(anchor - negative), axis=1)
    loss = tf.maximum(positive_dist - negative_dist + margin, 0.0)
    return tf.reduce_mean(loss)

# Define a function to extract embeddings
def extract_embedding(image_path):
    # Load and preprocess the image
    img = Image.open(image_path).resize((224, 224))  # Resize to ResNet input size
    img_array = np.array(img)
    if img_array.shape[-1] == 4:  # Handle RGBA images
        img_array = img_array[..., :3]
    img_array = preprocess_input(img_array)  # Normalize for ResNet
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Extract embeddings
    embedding = embedding_model.predict(img_array)
    return embedding.flatten()  # Convert to 1D vector


# 1. Load pre-trained ResNet50 model
base_model = ResNet50(weights='imagenet', include_top=False, pooling='avg')

# Freeze the initial layers and fine-tune the rest
for layer in base_model.layers[:-10]:
    layer.trainable = False

# Define a custom embedding model
class NormalizeLayer(Layer):
    def call(self, inputs):
        return tf.nn.l2_normalize(inputs, axis=1)  # L2 normalize the embeddings

embedding_model = Model(
    inputs=base_model.input,
    outputs=NormalizeLayer()(base_model.output)
)


# 3. Data augmentation for more diversity
# data_augmentation = tf.keras.Sequential([
#     tf.keras.layers.RandomFlip("horizontal"),
#     tf.keras.layers.RandomRotation(0.2),
#     tf.keras.layers.RandomZoom(0.2),
#     tf.keras.layers.RandomContrast(0.2),
# ])


# def euclidean_distance(vec1, vec2):

#     # Tính sự khác biệt giữa các phần tử của hai vector
#     difference = vec1 - vec2
#     # Tính khoảng cách Euclid (L2 norm)
#     distance = np.linalg.norm(difference)
#     return distance

# đọc ảnh admin nhập được chuyển vào public ảnh -> tạo embedding -> lưu file txt -> xoá ảnh

parser = argparse.ArgumentParser(description="create embedding for image")
parser.add_argument('--image', type=str, required=True, help='path to image file')
parser.add_argument('--name', type=str, required=True, help='name of the shoe')

# Lấy các tham số từ dòng lệnh
args = parser.parse_args()

# Từ cần tìm kiếm
image_path = args.image
shoe_name = args.name

# tạo embedding cho ảnh
vector_embedding = extract_embedding(image_path)

try:
# đọc file pkl lưu embedding
    with open(f'db.pkl', 'rb') as f:
        data = pickle.load(f)
except:
    data = []

data.append({'name': shoe_name, 'embedding': vector_embedding.tolist()})


# lưu embedding vào file txt
with open(f'db.pkl', 'wb') as f:
    pickle.dump(data, f)

# xoá ảnh
os.remove(image_path)
