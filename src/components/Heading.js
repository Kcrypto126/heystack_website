export default function Heading({ children }) {
  return (
    <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#D75A00] via-[#EC276E] to-[#542DE8] py-4 max-w-7xl md:mx-8 mx-4 lg:mx-auto md:mt-20 mt-12">
      {children}
    </h1>
  );
}
