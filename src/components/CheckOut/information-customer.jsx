import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useShoeContext } from "@/context/ShoeContext";
import { useState } from "react";
import axios from "axios";
import { createVnPayPayment } from "../Payment/payment-service";

const schema = z.object({
  fullname: z.string().min(1, { message: "Họ và tên không được để trống" }),
  phone_number: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  address: z.string().min(1, { message: "Địa chỉ không được để trống" }),
  province: z
    .string()
    .min(1, { message: "Tỉnh / Thành Phố không được để trống" }),
  distinct: z.string().min(1, { message: "Huyện / Quận không được để trống" }),
  vilage: z.string().min(1, { message: "Xã / Phường không được để trống" }),
});

const InfomationCustomer = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { f } = Object.fromEntries(params);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullname: "",
      phone_number: "",
      address: "",
      province: "",
      distinct: "",
      vilage: "",
    },
  });

  const { checkoutProduct } = useShoeContext();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formValues) => {
    setLoading(true);

    // Gộp các trường thành shipping_address
    const shipping_address =
      formValues.address +
      ", " +
      formValues.vilage +
      ", " +
      formValues.distinct +
      ", " +
      formValues.province;

    const { fullname, phone_number } = formValues;

    for (let i = 0; i < checkoutProduct.length; i++) {
      const product_id = checkoutProduct[i].product_id;
      const quantity = checkoutProduct[i].quantity;
      const size = checkoutProduct[i].size;
      const data = {
        fullname,
        phone_number,
        shipping_address,
        note: "Hàng dễ vỡ",
        payment_method: "COD",
        order_item: {
          product_id,
          quantity,
          size,
          is_buy_now: f === "sc" ? false : true,
        },
      };

      try {
        await axios.post("http://localhost:8080/orders/checkout", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } catch {
        toast.error("Đặt hàng thất bại");
        setLoading(false);
        return;
      }

      if (f === "sc") {
        break;
      }
    }

    setLoading(false);
    toast.success("Đặt hàng thành công");
    navigate("/account/orders");
  };

  const handlePayment = async () => {
    const { isSubmitting, isValid } = form.formState;
    if (isSubmitting || !isValid) {
      toast.error("Vui lòng kiểm tra lại thông tin");
      return;
    } else {
      const formData = form.getValues();
      const shipping_address =
        formData.address +
        ", " +
        formData.vilage +
        ", " +
        formData.distinct +
        ", " +
        formData.province;

      const { fullname, phone_number } = formData;
      const orderData = {
        fullname,
        phone_number,
        shipping_address,
        note: "Hàng dễ vỡ",
        payment_method: "VNPay",
        order_item: checkoutProduct.map((product) => ({
          product_id: product.product_id,
          quantity: product.quantity,
          size: product.size,
          is_buy_now: f === "sc" ? false : true,
        })),
      };

      console.log(orderData);

      // const res = await createVnPayPayment(orderData);
      // console.log(res.data);

      // if (res.code === "00") {
      //   window.location.href = res.data;
      // }

      // setLoading(true);
      // try {
      //   const res = await createVnPayPayment();
      //   if (res.code === "00") {
      //     window.location.href = res.data;
      //   } else {
      //     toast.error("Không thể thực hiện thanh toán");
      //   }
      // } catch {
      //   toast.error("Thanh toán thất bại");
      // } finally {
      //   setLoading(false);
      // }
    }
  };

  // const testHandlePayment = () => {
  //   const { isSubmitting, isValid } = form.formState;
  //   if (isSubmitting || !isValid) {
  //     toast.error("Vui lòng kiểm tra lại thông tin");
  //   } else {
  //     toast.success("Thanh toán thành công");
  //   }
  // };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nguyễn Văn X" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="0123456789" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="69 Vũ Tông Phan" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tỉnh / Thành Phố</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Hà Nội" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="distinct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Huyện / Quận</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Thanh Xuân" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vilage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xã / Phường</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Khương Trung" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-evenly">
          <Button variant="checkout" type="submit" disabled={loading}>
            Thanh toán ship COD
          </Button>

          <Button
            variant="checkout"
            type="button"
            disabled={loading}
            onClick={handlePayment}
          >
            Thanh toán VNPay
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InfomationCustomer;
