export default (posterPath: string | undefined): string => {
  if (posterPath) {
    return `${import.meta.env.VITE_IMAGE_API_URL}/${posterPath}`;
  }

  return "";
};
