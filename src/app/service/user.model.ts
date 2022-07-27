// Level of skills
export enum Level {
      Basic = 0,
      Good = 1,
      Expert = 2
  }

  // Type of Gender
  export enum Gender{
    male = 0,
    female = 1,
    Others = 2
  }

  // Whishes color
  export enum WishesColor{
    

  }

//  Type of Wishes
  export enum Wish {
    StartGroup=0,
    Partner=1,
    SwapTrain=2,
    Teach=3,
    Swap=4,
    Tutor=5,
    Employed=6,
    Consult=7,
    OfferService=8
  }

  // User skill list
export interface ISkills{
  id:string;
  skillName?:string;
  level?:Level;
  subCategory?:string;
  teachingLevel?:Level;
  wish?:Wish;

}

//  User Data
export interface IUser{

  id: string;
  skillId:string;
  user_id:string;
  levelSkill?:Level;
  teachingLevel?:Level;
  emailid?:string;
  name?:string;
  username:string;
  gender?:Gender;
  company?:string;
  qualifications?:string;
  school?: string;
  licenses?: string;
  experiences?: string;
  rates?:string;
  bod?:Date;
  country?: string;
  state?:string;
  city?:string;
  photolink?:string;
  category?:string;
  subCategory?:string;
  userId?:string;
  desiredskills?:string;
  keywords?:string;
  skillOffer?:string;
  fname?:string;
  lname?:string;
  work ?: string;
  skillkeywords?:string;
  business?:string;
  address?:string;
  borough?:string;
  province?:string;
  village?:string;
  town?:string;
  zip?:string;
  phone?:string;
  wishesTo?:Level;
  wishesColor?:string;
  skillLevel?:string;
  teachLevel?:string;
  cat_id?:string;
  sub_cat_id?:string;
  skillWish:boolean;
}

