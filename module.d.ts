
declare namespace NodeJs{
  export interface ProcessENV{
    DATABASE_URL: string;
    jwtSecretKey: string;
    jwtRefreshKey: string;
  }

}