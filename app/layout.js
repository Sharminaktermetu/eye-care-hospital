import "./globals.css";

export const metadata = {
  title: {
    default: "EyeCare Hospital | Advanced Eye Care",
    template: "%s | EyeCare Hospital",
  },
  description:
    "Professional eye care, experienced ophthalmologists and advanced eye treatment. Book your appointment with our specialists.",
  keywords: [
    "Eye Hospital",
    "Eye Specialist",
    "Ophthalmologist",
    "Eye Care",
    "Doctor Appointment",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navber></Navber>
        {children}
      </body>
    </html>
  );
}