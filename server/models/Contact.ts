export interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: {
      mobile: string,
      work: string
    }
  }