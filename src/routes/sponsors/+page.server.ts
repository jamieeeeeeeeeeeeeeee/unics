import type { PageServerLoad  } from "./$types";

export const load: PageServerLoad  = async () => {
  return {
    props: {
      sponsors: await import("../../db/sponsors.json").then((m) => m.default),
    }
  };
};