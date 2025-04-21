import { useEffect, useState } from "react";
import axios from "axios";

import { TTMFETabel } from "@cabalse/ttmfe-component-lib";
import "@cabalse/ttmfe-component-lib/styles.css";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("http://localhost:3000/subscribers");
        setSubscribers(response.data.emails);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();

    const interval = setInterval(fetchEmails, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl font-bold">Subscribers</h2>
      <TTMFETabel columns={["Email"]} data={subscribers} />
    </div>
  );
};

export default Subscribers;
