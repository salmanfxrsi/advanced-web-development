{
  // generic with interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    phone?: X;
  }

  interface EmiLabWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDev: Developer<EmiLabWatch> = {
    name: "farsi",
    computer: {
      brand: "mac",
      model: "m4 air",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "emiLab",
      model: "kw66",
      display: "ole",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Iphone {
    name: string;
    model: string;
  }

  const richDev: Developer<AppleWatch, Iphone> = {
    name: "alex",
    computer: {
      brand: "mac",
      model: "m4 air",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "apple watch",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    phone: {
      name: "iphone",
      model: "14 pro max",
    },
  };

  //
}
