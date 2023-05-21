export function handleScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  callback: any
) {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });

  callback();
}
