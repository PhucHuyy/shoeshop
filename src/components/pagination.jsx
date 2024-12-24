import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationForm = ({ page, totalPages, handleNext, handlePrevious }) => {
  return (
    <Pagination>
      <PaginationContent>
        {/* Nút Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            disabled={page === 0} // Vô hiệu hóa khi ở trang đầu tiên
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        {/* Hiển thị số trang */}
        <PaginationItem>
          <PaginationLink href="#">
            Page {page + 1} / {totalPages}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {/* Nút Next */}
        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            disabled={page >= totalPages - 1} // Vô hiệu hóa khi ở trang cuối
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationForm;
