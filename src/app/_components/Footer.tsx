export default function Footer() {
  return (
    <footer>
      <div className="h-[30px] flex">
        <p>
          &copy; {new Date().getFullYear().toString()} 이리온 Project 파이팅
        </p>
      </div>
    </footer>
  );
}
