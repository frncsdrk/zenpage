export default function documentDimensions() {
  const height = document.body.clientHeight;
  const width = document.body.clientWidth;
  return {
    height,
    width,
  };
}
