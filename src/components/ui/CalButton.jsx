import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/**
 * Drop-in replacement for any button that should open the Cal.com booking modal.
 * Pass `className` and `children` exactly as you would a normal <button>.
 */
export default function CalButton({ children, className, ...props }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="15min"
      data-cal-link="sufyaan-ahmed/15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
