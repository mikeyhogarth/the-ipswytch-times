import {createClient} from "@sanity/client";

export default createClient({
  projectId: "02ihfe82",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

