export type RetailerFormInputGeneric<Retailer> = {
  data : Retailer[]
}

export type RetailerFormInput = {
  Name : String,
  Email : String,
  formEmail : String,
  Address : String,
  Postal : String,
}

export type Retailers = {
  data: RetailerFormInput[] | null;
}