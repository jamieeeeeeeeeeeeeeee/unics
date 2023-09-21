import type { PageServerLoad  } from "./$types";

export const load: PageServerLoad  = async () => {
  return {
    props: {
      committee: await import("../../db/committee.json").then((m) => m.default),
    }
  };
};