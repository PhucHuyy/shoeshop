import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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

const schema = z.object({
  name: z.string().min(1, { message: "Họ và tên không được để trống" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  address: z.string().min(1, { message: "Địa chỉ không được để trống" }),
  province: z
    .string()
    .min(1, { message: "Tỉnh / Thành Phố không được để trống" }),
  distinct: z.string().min(1, { message: "Huyện / Quận không được để trống" }),
  vilage: z.string().min(1, { message: "Xã / Phường không được để trống" }),
});

const InfomationCustomer = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      province: "",
      distinct: "",
      vilage: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Đặt hàng thành công");
    // navigate("/shoppingcart");
  };
  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
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
            name="phone"
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
          <Button variant="checkout" type="submit">
            Thanh toán ship COD
          </Button>

          <Button variant="checkout" type="button">
            Thanh toán VNPay
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InfomationCustomer;
