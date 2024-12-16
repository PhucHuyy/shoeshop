import { breadcrumbs } from "@/lib/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const BreadCrumb = ({ type }) => {
  const { title, path } = breadcrumbs[type];
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList className="text-md text-black font-semibold">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-red-500">
              Trang chủ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Danh mục</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbLink href={path} className="hover:text-red-500">
            {title}
          </BreadcrumbLink>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
