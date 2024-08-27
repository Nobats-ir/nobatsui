import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import faLocale from '@fullcalendar/core/locales/fa';

export default function Reserved(){
    return(
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      locale={faLocale}
    />
    )
  }
  