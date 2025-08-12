export default function Footer() {
  return (
    <footer >
      <div className="mx-auto max-w-5xl px-4 py-8 flex items-center justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} MySite</p>
      </div>
    </footer>
  );
}
