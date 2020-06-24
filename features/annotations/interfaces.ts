interface Vehical {
  name: string;
  year: Date;
  broken: boolean;
  summery(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summery(): string {
    return 'Car from Honda';
  },
};

const printVehical = (vehical: Vehical): void => {
  console.log(`Name: ${vehical.name}`);
  console.log(`Year: ${vehical.year}`);
  console.log(`Broken: ${vehical.broken}`);
};

printVehical(oldCivic);
