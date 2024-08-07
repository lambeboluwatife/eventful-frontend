export const events = [
  {
    _id: {
      $oid: "66ae2bb50a528d08867f6b66",
    },
    title: "NodeJS Deep Dive",
    location: "Marina, Lagos Nigeria",
    category: "Technology",
    description: "A deep dive into NodeJS syntax and core modules.",
    date: "16/08/2024",
    time: "11am",
    price: 0,
    capacity: 500,
    backdrop:
      "https://res.cloudinary.com/dk3294qvk/image/upload/v1722690396/dk9mfgdtkgomwwawijdx.jpg",
    applicants: [
      {
        applicantId: {
          $oid: "66af9ff8ba9742b2b6200b49",
        },
        name: "Jane Doe",
        username: "Jane",
        email: "janedoe@gmail.com",
        _id: {
          $oid: "66afbe0e33ea53fbcfecf844",
        },
      },
    ],
    ticketsSold: 1,
    tickets: [
      {
        eventId: {
          $oid: "66ae2bb50a528d08867f6b66",
        },
        attendeeId: {
          $oid: "66af9ff8ba9742b2b6200b49",
        },
        purchaseDate: {
          $date: "2024-08-04T17:44:59.575Z",
        },
        qrCode:
          "data:image/png;base64,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",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudElkIjoiNjZhZTJiYjUwYTUyOGQwODg2N2Y2YjY2IiwidGlja2V0SWQiOiJ0aWNrZXRfMTcyMjc5MzQ5OTUyMF9ka3licjc4a2wiLCJ1c2VySWQiOiI2NmFmOWZmOGJhOTc0MmIyYjYyMDBiNDkiLCJpYXQiOjE3MjI3OTM0OTl9.-HkTwm8PXR0zwxErVIFcionxC66xJonhapIUGlsEkeU",
        price: 0,
        _id: {
          $oid: "66afbe1b33ea53fbcfecf853",
        },
        scanned: true,
      },
    ],
    reminders: [
      {
        reminderTime: "15/08/2024",
        sent: false,
        email: "boluwatifelambe@gmail.com",
        _id: {
          $oid: "66ae2bb50a528d08867f6b67",
        },
      },
      {
        reminderTime: "15/08/2024",
        sent: false,
        email: "tonaadetona@gmail.com",
        _id: {
          $oid: "66ae43c0d2e878344cdf1d97",
        },
      },
    ],
    createdAt: {
      $date: "2024-08-03T13:08:05.554Z",
    },
    organizer: {
      organizerId: {
        $oid: "66ae2807ad85fd904eb826f4",
      },
      organizationName: "L.B.D Hub",
      email: "boluwatifelambe@gmail.com",
    },
    __v: 6,
  },
  {
    _id: {
      $oid: "66af8ac195151ba6ee6af866",
    },
    title: "AR Art Exhibition",
    location: "Gbagada, Lagos Nigeria",
    category: "Arts",
    description: "An AR inspired 3D art exhibition.",
    date: "21/08/2024",
    time: "1pm",
    price: 0,
    capacity: 200,
    backdrop:
      "https://res.cloudinary.com/dk3294qvk/image/upload/v1722780264/zwslj128mx3hsdeaegek.jpg",
    applicants: [
      {
        applicantId: {
          $oid: "66af9ff8ba9742b2b6200b49",
        },
        name: "Jane Doe",
        username: "Jane",
        email: "janedoe@gmail.com",
        _id: {
          $oid: "66afa01ffcee69bdac05a1c9",
        },
      },
    ],
    ticketsSold: 1,
    tickets: [
      {
        eventId: {
          $oid: "66af8ac195151ba6ee6af866",
        },
        attendeeId: {
          $oid: "66af9ff8ba9742b2b6200b49",
        },
        purchaseDate: {
          $date: "2024-08-04T15:38:06.804Z",
        },
        qrCode:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAklEQVR4AewaftIAABVZSURBVO3BQY7E1pLAQFKo+1+Z42WuHiCoqi3/yQj7B2ut9QIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIfHlL5SxWTyhMVJyonFZPKScWJyh0Vd6icVEwqU8WkMlWcqEwVd6hMFXeoTBV3qEwVd6hMFXeoTBUnKn+p4omLtdZ6iYu11nqJi7XWeokPX1bxTSonFZPKVDGp/FLFpDKpTBVTxYnKpDJV3FHxb1KZKu5QmSruUJkq7lCZKu5QOamYKiaVqeKk4ptUvulirbVe4mKttV7iYq21XuLDj6ncUXGHylRxUjGpTBV3qJxUTCqTyknFVDGpnKhMFZPKVPGEyknFExWTyqQyVZxUTCpTxR0qU8VUcaIyqUwV36RyR8UvXay11ktcrLXWS1ystdZLfPiPqzhRuUPlpOIOlaniDpWTipOKSeVEZao4qZhUvknlpGJSeaJiUjmpmFR+SWWq+F9ysdZaL3Gx1lovcbHWWi/x4X+Myh0Vk8pUMamcVEwVd6h8k8oTKr+kMlWcVEwqU8Wk8ksqU8WkckfFHSpTxX/ZxVprvcTFWmu9xMVaa73Ehx+r+CWVqeKbVKaKSeUOlScqTlSmikllqphUTiruULlDZaqYVKaKk4onKp6omFSmihOVqWKqeKLiTS7WWuslLtZa6yUu1lrrJT58mcqbqEwVk8pUMak8oTJVTCpTxaRyojJVTCpTxaQyVUwqJypTxRMVk8pUMalMFZPKVDGpTBWTylQxqUwVk8pUMalMFXeoTBUnKm92sdZaL3Gx1lovcbHWWi9h/+B/mMpUcaIyVUwqU8UTKicVT6icVJyoTBV3qEwVd6hMFScqd1ScqEwVJypTxR0qU8WkMlX8L7lYa62XuFhrrZe4WGutl/jwkMpUMalMFXeonFRMKlPFN1VMKicVd1RMKicVd1ScqJyofJPKScWJyknFicpUcYfKicpUMamcqEwVk8pUcaIyVZyoTBWTylTxxMVaa73ExVprvcTFWmu9hP2DB1ROKk5Upoo7VKaKSeWXKk5UTiomlaliUjmp+CaVk4pJZaqYVO6omFSmikllqrhDZaqYVKaKSWWqmFSmikllqphUpopJZao4UTmp+EsXa631EhdrrfUSF2ut9RIfHqo4UTmpmFS+qWJS+SaVqeKkYlKZKiaVO1ROKr5J5UTlTVT+kso3Vdyh8oTKVDGpTBVPXKy11ktcrLXWS1ystdZLfPgylaliUjmpOFGZKu6omFSmihOVb6q4o2JSOam4Q2WqOFGZKiaVqeKJiicq7lCZKv6SylRxUjGpPFExqUwV33Sx1lovcbHWWi9xsdZaL/HhIZWp4ptUpooTlaliUjlRmSpOKiaVv1RxojJV3KEyVXyTylQxqUwVk8qJylQxqUwVd6hMFXeonFTcoTJVnKhMFZPKVPFLF2ut9RIXa631EhdrrfUSHx6qmFSmijtUpooTlScqvqliUplUTiqmiknlpGKqeKJiUjlRmSomlanipGJSmSomlaniDpWpYlKZKiaVqWJSmSomlROVqeKbVKaKv3Sx1lovcbHWWi9xsdZaL/HhIZUTlanipGJSmSqmihOVqeIOlanijopJ5Q6VqeJE5Y6KqWJSmSomlanipOKJijtU/k0q31TxTRVPqEwVT1ystdZLXKy11ktcrLXWS9g/+EMqd1RMKlPFpPJNFZPKVDGpTBWTyjdVPKFyUjGpnFQ8oXJScaJyUnGiclJxonJScaJyUnGHylQxqZxU/KWLtdZ6iYu11nqJi7XWeokPD6lMFZPKEypTxUnFpHJScUfFHSpPVEwqd6hMFVPFpPKXVKaKSeVE5aTiROWk4kRlqphUTlSmikllUjmp+CWVqeKbLtZa6yUu1lrrJS7WWuslPjxUcUfFpDJVnKj8kspJxaQyVTyhclIxqUwVT1RMKicVk8pUMamcqEwVv1QxqdxRMalMFZPKVDGpTBWTylQxqUwVk8pUMamcVPzSxVprvcTFWmu9xMVaa73Eh4dUpooTlTtUpopJ5aTiiYpJZaqYVKaKOypOVKaKSeVEZaqYVJ6omFSmihOVSeWXVKaKSWWqmFS+qWJSmSomlROVOyomlaliUpkqnrhYa62XuFhrrZe4WGutl/jwZSpTxaQyVUwqU8WkMlVMKicqU8WJylTxb6qYVKaKO1ROKk5U7lCZKu6omFROVKaKE5U7Ku6ouKPimypOVKaKSeWXLtZa6yUu1lrrJS7WWuslPjxUMalMKk+onKicqEwVk8pJxaRyUjGpnFQ8UXGiMlVMFZPKpDJV3FFxojJVfFPFHRV3qEwVd6hMFScqU8WJyonKHRWTyjddrLXWS1ystdZLXKy11kt8+LKKO1SmijtUpopJZVKZKiaVSeUOlX+TylRxR8VfqphUpopvUpkqJpWp4g6VqWJSmSq+SWWqOKk4UZkqpopvulhrrZe4WGutl7hYa62X+PBlKt+kcofKExUnKlPFpDJV3KEyVTyhMlVMKlPFicpUMalMKndUTConFZPKL6mcVEwqU8UTFZPKVDGpTBXfpDJVPHGx1lovcbHWWi9xsdZaL/HhyyomlaliUjmpOFE5qZhUTlROKiaVqeIOlROVOypOVKaKSWWqOFF5omJSeaJiUpkq7lCZKk5U7lC5o2KquENlqjipmFR+6WKttV7iYq21XuJirbVe4sOXqTyhckfFicqJyknFpPJvqrhDZaqYVE5UpopJZaq4Q2WquENlqrhD5QmVk4o7KiaVSeWJiknlpGKqmFS+6WKttV7iYq21XuJirbVe4sNDKicVk8odFZPKpDJVPFExqUwVk8qkMlWcVNyhMlWcVEwqU8WJyh0qU8VJxaQyVZxUTCpTxaQyVUwqU8Wk8oTKVDGpTBWTylQxqUwVd1RMKn/pYq21XuJirbVe4mKttV7iw5dVTCpTxYnKpHJScVJxh8pUMamcVEwqU8WJyknFpDJVTConKr+kclJxh8pUMVVMKk+onFRMKpPKVDGpnKjcUTGpnFRMKlPFpPJLF2ut9RIXa631EhdrrfUSHx6quEPljopvUnmi4kRlqphUpoqTipOKk4oTlZOKb6p4omJSmSqmihOVJ1ROKu6omFSeqDhRuaNiUvmmi7XWeomLtdZ6iYu11nqJDw+pTBVTxR0qk8pUMamcVEwVk8o3VfySylRxonJHxaQyVZxUTConKt+kMlV8U8WkMlVMKlPFN6lMFb+kMlV808Vaa73ExVprvcTFWmu9xIcvU5kqnqi4o+KOiknlRGWquKPim1SmiqliUjlROVGZKiaVqWJSeUJlqphUvqliUpkqJpWpYlI5UZkqJpWpYlKZKp5QmSp+6WKttV7iYq21XuJirbVewv7BAypTxaQyVUwq31QxqdxRMalMFZPKHRUnKicVk8pUMamcVJyo/JsqJpWp4kRlqjhRmSpOVKaKb1L5N1VMKicVT1ystdZLXKy11ktcrLXWS3z4sYpJ5aTiDpVJZao4UZlUTlSmihOVE5WTiknlRGWqmFQmlanipOIOlZOKX6qYVKaKqeJEZar4SxWTylRxh8oTFd90sdZaL3Gx1lovcbHWWi/x4ctUpoonVKaKk4oTlaliUpkqTlROKiaVqWJSmVSmikllqphUTiqeUJkq7lCZKiaVE5WpYlI5UZkqJpUTlaliUrmj4ptUpoqTijtUpoonLtZa6yUu1lrrJS7WWuslPjxU8UsV31RxUjGp3FExqUwVd1ScVHyTyh0VT1ScVEwqU8VJxaQyVZxUTCpTxUnFpHKiMlVMKndU3KEyVfyli7XWeomLtdZ6iYu11noJ+wdfpDJVTCpvUjGpTBWTyknFicpJxYnKScUdKm9SMancUTGp3FExqdxRMalMFZPKVHGi8ksVk8pUMalMFU9crLXWS1ystdZLXKy11kt8+LKKOyqeUJkqTlROKiaVk4o7Ku5QmSomlROVk4pJZap4QuWk4qRiUnmTijtUfqniROVEZaqYVH7pYq21XuJirbVe4mKttV7iw5epnFTcoTJV3KEyVZyoPKHyJhUnKlPFpDJVnKhMFScqJxVTxaTylyomlZOKE5VvUpkqpooTlZOKX7pYa62XuFhrrZe4WGutl/jwkMpJxYnKVDFVnFRMKneo/FLFpHJSMal8k8pU8ZdUTiqeUJkqJpWp4qRiUpkqJpU7KiaVqWKqmFSmiknlpGKqmFSmil+6WGutl7hYa62XuFhrrZf48FDFpHKicqJyUnFScUfFHSpPVDyh8k0qU8VUcaIyVUwqJxV3qJxUvInKScVfqphUpoo7VKaKJy7WWuslLtZa6yUu1lrrJT58WcWkclIxqUwVJypTxYnKExX/popJZVKZKk4qJpU7KiaVO1SmikllqphUTlROVKaKSWWqmFROKk5UTlSmihOVqWJSmSomlaliUvmli7XWeomLtdZ6iYu11nqJD1+mcofKVDGp/FLFEypTxaQyVfxSxaRyR8WJyqTyTSpTxR0qU8WJyqQyVdxRMalMFScVk8qkclIxqZyoTBUnFb90sdZaL3Gx1lovcbHWWi/x4SGVk4oTlUllqphUnqiYVKaKSWWquKPiDpWpYlKZKv5NFZPKVDGpTBWTyonKVDGp/JLKicpUcYfKVDGpTBWTyh0VJypTxaQyVTxxsdZaL3Gx1lovcbHWWi/x4Y+pnFRMKlPFicodFZPKEyonFScVJxWTyhMqJxVPqEwVk8oTKlPFpHJSMancUTGpnKicVEwq31QxqZxU/KWLtdZ6iYu11nqJi7XWeokPX1ZxUjGpTCpTxRMVd1ScqEwVk8odKlPFicpUMalMFZPKVDGpTCpPVNxRcVIxqUwqU8WkMqlMFZPKVDGpfJPKScWk8k0VJypTxTddrLXWS1ystdZLXKy11kt8eKhiUjmpmComlUnlpOJE5Y6KO1Smim9SOVE5UTlRmSpOVCaVb1KZKu6oeBOVqWJSmSomlUllqphUpopJ5YmKX7pYa62XuFhrrZe4WGutl/jwkModKlPFScWkMqlMFZPKEypTxaQyqZxUTBUnFScqJxWTylRxovJfojJVnFRMKlPFpDJVTCpTxR0qU8UvVUwqU8VfulhrrZe4WGutl7hYa62X+PDHKiaVqWJSmSomlScqJpUTlaniCZWp4o6KSWVSmSruqJhUpopJZVI5qThRmSp+qeIOlaliUpkq7lCZKiaVqWJSmSomlSdUpoonLtZa6yUu1lrrJS7WWuslPjxUMalMFZPKicpUMamcqEwVk8qkMlVMKlPFHSpTxYnKHRUnFZPKVPGEyh0Vk8pJxaRyUjGpnKicVHyTyh0Vk8odFScVk8q/6WKttV7iYq21XuJirbVewv7BAyp3VEwqd1Q8oXJHxaTyRMWkMlVMKlPFpDJVTCr/pooTlZOKSeWOiknlL1WcqPxSxaQyVZyonFR808Vaa73ExVprvcTFWmu9xIeHKiaVJyq+SWWqmFSmiknlpGJSmSomlTsqJpU7KiaVqeJE5aTiROWk4s0qJpUnVO6oOFGZKk4qTlSmiknlly7WWuslLtZa6yUu1lrrJT58WcWkcofKN1VMKicqJxUnFScVT1RMKpPKScWkclLxv6RiUvkvUZkqTlSmikllqphUpopJZap44mKttV7iYq21XuJirbVe4sO/rGJSmSpOVKaKk4o7VCaVqeIJlZOKOyq+SWWquKNiUplUTiqmiknlRGWqOKmYVL6pYlKZKu5QmSqeUJkqJpWp4psu1lrrJS7WWuslLtZa6yU+PKRyUnGicqJyUjGpTBWTylRxUnGHyknFVDGpPKHyRMWJyknFpHJHxRMVk8pfqnhCZao4qZhUpoo7Ku5QmSqeuFhrrZe4WGutl7hYa62X+PBlFZPKScUTKlPFpDJVfJPKVDGpPKFyR8WJylRxonJSMamcVEwqk8pUcVIxqUwVk8qJylQxqUwVk8pU8U0VJxWTyknFpHJHxTddrLXWS1ystdZLXKy11kt8eKjim1TuqDipmFSmijtUnlCZKv5NKicVk8pJxaRyR8WkMlXcoTJVTConKndUTCpTxUnFpDJVPFExqZxUnKhMFU9crLXWS1ystdZLXKy11kt8eEhlqpgqJpWTijtUpopJZaqYVKaKSWWqeKJiUpkqTlSmiicqJpVJZaqYVE4qfkllqphU7qi4Q+WkYlI5UZkqJpWp4i+pTBXfdLHWWi9xsdZaL3Gx1lovYf/gi1ROKiaVqWJSOamYVL6pYlI5qThROamYVE4qTlSmikllqphUvqliUjmpOFG5o2JSmSruULmjYlJ5s4q/dLHWWi9xsdZaL3Gx1lovYf/gP0xlqnhCZao4UTmpOFG5o2JSmSpOVKaKSeWk4g6VqeJEZao4UTmpmFTuqLhDZao4UTmpOFGZKu5QmSomlanily7WWuslLtZa6yUu1lrrJT48pPKXKk5UpopJ5aTiRGWqOFGZKqaKSeVEZaqYVKaKE5WpYlI5UZkqTlSmihOVk4oTlaniRGVSmSr+kspUcYfKVHGicofKVPHExVprvcTFWmu9xMVaa73Ehy+r+CaVk4o7Ku5QeZOKJyq+qeKOikllqphUpooTlanim1SmiicqJpWp4omKJyomlV+6WGutl7hYa62XuFhrrZf48GMqd1Q8ofJLFScqU8UdFScqU8VUMalMFZPKVHGi8pcqTlSmikllqphU7qiYVJ5QmSomlaniROWbVP7SxVprvcTFWmu9xMVaa73Eh/8xFZPKVDGpnFScqJyoTBUnKk+oTBUnFScVd6hMFZPKVDGpTBWTyh0Vk8pUMalMFZPKVHGHylQxqUwVT1T8l1ystdZLXKy11ktcrLXWS3z4j1OZKqaKSeWkYlKZKqaKb6o4UblDZaqYVO6omFROVKaKSeXfpDJV/H+iclIxqZxUPHGx1lovcbHWWi9xsdZaL/Hhxyp+qeKbVKaKE5WTiknlpOIOlScqJpUTlTsqTiomlUllqjhROak4UTmpOFG5Q+UvqUwVk8pJxS9drLXWS1ystdZLXKy11kt8+DKVv6RyUjFVnKhMKicVk8qk8oTKScWJyh0Vk8pUMalMFZPKVHFHxRMVT1Q8UXGiMlVMKn+pYlKZKiaVqeKJi7XWeomLtdZ6iYu11noJ+wdrrfUCF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUSF2ut9RIXa631EhdrrfUS/wdh5pETm9PIdAAAAABJRU5ErkJggg==",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudElkIjoiNjZhZjhhYzE5NTE1MWJhNmVlNmFmODY2IiwidGlja2V0SWQiOiJ0aWNrZXRfMTcyMjc4NTg4Njc2MF9oNDVuaWJ0ZHEiLCJ1c2VySWQiOiI2NmFmOWZmOGJhOTc0MmIyYjYyMDBiNDkiLCJpYXQiOjE3MjI3ODU4ODZ9.w4cyUht5v9PLly2bU2uVkkY9sGhSue5mowfQBIISYuw",
        price: 0,
        _id: {
          $oid: "66afa05efcee69bdac05a1d2",
        },
        scanned: false,
      },
    ],
    reminders: [
      {
        reminderTime: "20/08/2024",
        sent: false,
        email: "boluwatifelambe@gmail.com",
        _id: {
          $oid: "66af8ac195151ba6ee6af867",
        },
      },
    ],
    createdAt: {
      $date: "2024-08-04T14:05:53.470Z",
    },
    organizer: {
      organizerId: {
        $oid: "66ae2807ad85fd904eb826f4",
      },
      organizationName: "L.B.D Hub",
      email: "boluwatifelambe@gmail.com",
    },
    __v: 9,
  },
];
