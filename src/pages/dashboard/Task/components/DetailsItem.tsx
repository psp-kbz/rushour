import React from "react";

type DetailsProps = {
  children: React.ReactNode;
};

export function Details({ children }: React.PropsWithChildren<DetailsProps>) {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
}

type DetailsItemProps = {
  label: string;
  value: string | null | React.ReactNode;
};

export function DetailsItem({ label, value }: DetailsItemProps) {
  return (
    <tr style={{ color: "#4E4B66" }}>
      <td style={{ padding: "10px", width: "300px" }}>{label}</td>
      <td style={{ padding: "10px", width: "auto" }}>{value}</td>
    </tr>
  );
}
