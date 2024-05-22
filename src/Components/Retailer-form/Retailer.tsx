export type RetailerFormInputGeneric<Retailer> = {
  data : Retailer[]
}

export type RetailerFormInput = {
  name : String,
  email : String,
  formEmail : String,
  address : String,
  postal : String,
}

export type Retailers = {
  data: RetailerFormInput[] | null;
}