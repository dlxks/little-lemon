import { render, screen } from "@testing-library/react";
import BookingForm from "@/components/BookingForm/BookingForm";

describe("BookingForm", () => {
  test("renders heading", () => {
    render(
      <BookingForm
        setToast={() => {}}
        availableTimes={["5:00 PM"]}
        dispatchTimes={() => {}}
      />
    );

    const heading = screen.getByRole("heading", {
      name: /make your reservation/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
