import { useMemo } from "react";
import { useDetailsContext } from "contexts/details.context";

import { formatDate, formatDateYear } from "utils/formatDate";
import posterByPathUrl from "utils/posterByPathUrl";

const useDetailsBanner = () => {
  const { details } = useDetailsContext();

  const handleGetRelease = () => {
    const certification = details?.release_dates.results.find(
      (release) => release.iso_3166_1 == "BR"
    );

    return certification?.release_dates[0];
  };

  const handleGetGenres = () =>
    details?.genres.map((genre) => genre.name).join(", ");

  const handleGetDuration = () => {
    if (details?.runtime) {
      const hours = Math.floor(details?.runtime / 60);
      const minutes = details?.runtime % 60;

      return `${hours}h ${minutes}m`;
    }

    return "";
  };

  const poster = posterByPathUrl(details?.poster_path);

  const title = `${details?.original_title} ${
    details?.release_date && `(${formatDateYear(details?.release_date)})`
  }`;

  const info = useMemo((): string => {
    const release = handleGetRelease();
    const genres = handleGetGenres();
    const duration = handleGetDuration();

    `${
      release?.release_date
        ? `${formatDate(release?.release_date || "")} •`
        : ""
    }`;

    return `${
      release?.certification ? `${release?.certification} anos •` : ""
    } ${
      release?.release_date
        ? `${formatDate(release?.release_date || "")} •`
        : ""
    } ${genres} • ${duration}`;
  }, [details]);

  const average = Math.floor((details?.vote_average || 0) * 10);

  const sinopse = details?.overview;

  const crew = details?.credits?.crew
    ?.filter((crew) => crew.job === "Director" || crew.job === "Writer")
    .slice(0, 5);
  return {
    poster,
    title,
    info,
    average,
    sinopse,
    crew,
  };
};

export default useDetailsBanner;
