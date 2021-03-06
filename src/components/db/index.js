let band = [
    {id: "1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7OzzXguGAWXL80mldSZ2uRuVbY0dSrAtuvg&usqp=CAU",
        name: "Chris Squire",
        instrument: ["bass", "backing vocals"],
        year_joined: 1968,
        current_member: false
    },
    {id: "2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUnEbPepXWvHaQVG23dB9OJcFYlaHoHlFjbQ&usqp=CAU",
        name: "Steve Howe",
        instruments: ["guitar", "backing vocals", "lap steel guitar"],
        year_joined: 1970,
        current_member: true
    },
    {id: "3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1Hr7OfmDaWm_QwbZEnSP4Z6IMRMQ4XWrQg&usqp=CAU",
        name: "Jon Anderson",
        instrument: ["lead vocals", "guitar", "percussion", "harp"],
        year_joined: 1968,
        current_member: false
    },
    {id: "4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvazXJs3J-7soSLgHkTSfDBiocrAwHXwK2rw&usqp=CAU",
        name: "Rick Wakeman",
        instrument: "keyboards",
        year_joined: 1971,
        current_member: false
    },
    {id: "5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW49NOb-qFs_g1KE1QFiNTda7uuN8A6AGiuw&usqp=CAU",
        name: "Alan White",
        instrument: ["drums", "percussion"],
        year_joined: 1972,
        current_member: true
    },
    {id: "6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSI8KcL5mWcbxojrboFdzGII56rMod17EyxHQ&usqp=CAU",
        name: "Tony Kaye",
        instrument: ["organ", "Piano"],
        year_joined: 1968,
        current_member: false
    },
    {id: "7",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrS4QzgY2KhsyA1Rs3zgMUJ9udRXNPYqTeaw&usqp=CAU",
        name: "Bill Bruford",
        instrument: ["drums", "percussion"],
        year_joined: 1968,
        current_member: false
    },
    {id: "8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8rkL8xZvLcTCT-DyjvHUUL2ylxKLEUxiawQ&usqp=CAU",
        name: "Peter Banks",
        instrument: ["guitar", "backing vocals"],
        year_joined: 1968,
        current_member: false
    },
    {id: "9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLV20VUJaAg429g6olupVg1hGbSPYTAWsh6w&usqp=CAU",
        name: "Tony O'Reilly",
        instrument: "drums",
        year_joined: 1968,
        current_member: false
    },
    {id: "10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw-leS4jQPql7nh3MxJDKlgKPhrIdaXuVbSg&usqp=CAU",
        name: "Patrick Moraz",
        instrument: "keyboards",
        year_joined: 1974,
        current_member: false
    },
    {id: "11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXe1xk5GktLNQaoaoR0clXiq4o4s84s0zL4w&usqp=CAU",
        name: "Trevor Horn",
        instrument: ["guitar", "backing vocals"],
        year_joined: 1980,
        current_member: false
    },
    {id: "12",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9SfSN_EJChQkz-lnQhR8PGIiMO-zZJHvqqA&usqp=CAU",
        name: "Trevor Rabin",
        instrument: ["guitar", "backing vocals"],
        year_joined: 1982,
        current_member: false
    },
    {id: "13",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSieCEM_dqhBNh3fmqb3OX_SLYrSABWz9eWHg&usqp=CAU",
        name: "Eddie Jobson",
        instrument: "keyboards",
        year_joined: 1983,
        current_member: false
    },
    {id: "14",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCGRNhL4X8KkrTkZG9ZsHVfTAEjPIcCG_Iyg&usqp=CAU",
        name: "Igor Khoroshev",
        instrument: ["keyboards", "backing vocals"],
        year_joined: 1997,
        current_member: false
    },
    {id: "15",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYkQT5jvnVh5YAFYrYo72SrYhoQ4KZqc20PA&usqp=CAU",
        name: "Jon Davison",
        instrument: ["lead vocals", "guitar", "percussion"],
        year_joined: 2012,
        current_member: true
    },
    {id: "16",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr2gMx928Sfq3WTEkTB2kZBzd3cq6MDuDMcQ&usqp=CAU",
        name: "Benoît David",
        instrument: "lead vocals",
        year_joined: 2008,
        current_member: false
    },
    {id: "17",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYZ0cr-8r2rEMIbZ4_Klq5gh6QP3PHev0qOg&usqp=CAU",
        name: "Geoff Downes",
        instrument: "keyboards",
        year_joined: 1980,
        current_member: true
    },
    {id: "18",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSFWdWrqXPDxA-fc48cX1ezDOCb10IA8bUqA&usqp=CAU",
        name: "Oliver Wakeman",
        instrument: "keyboards",
        year_joined: 2008,
        current_member: false
    },

    {id: "19",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdyjBcY-4MrvWd4oLzt8Id0J2qpbBW6vEIeQ&usqp=CAU",
        name: "Billy Sherwood",
        instrument: ["bass", "keyboards", "guitar", "backing vocals"],
        year_joined: 1997,
        current_member: true
    }
]

export default band