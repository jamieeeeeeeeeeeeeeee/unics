import type { PageServerLoad  } from "./$types";

export const load: PageServerLoad  = async () => {
  return {
    props: {
      events: await import("../../db/events.json").then((m) => 
m.default),
    }
  };
};
