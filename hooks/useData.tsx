// import { useState, useEffect } from "react";
import useGoogleSheets from "use-google-sheets";

export const useData = (sheetId):any => {
  let store = {};
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_API,
    sheetId: sheetId,
  });



  //MENU
  let menu = data[1]?.data;
  if (menu && menu.length) {
    menu = menu.filter((e: any) => e.enabled === "TRUE");
  }

  //PORTFOLIO ORDEN POR GRUPOS
  let portfolio = data[4]?.data;
  let portfolioGroups = {};
  if (portfolio && portfolio.length) {
    let groups = new Set();
    portfolio.forEach((e: any) => {
      if (e.group && e.group.length) {
        groups.add(e.group);
      }
    });
    groups.forEach((e: any) => {
      portfolioGroups[e] = portfolio.filter((f: any) => f.group === e);
    });
  }
  store["profile"] = data[0]?.data;
  store["menu"] = menu;
  store["id"] = data[2]?.data[0];
  store["workingOn"] = data[3]?.data;
  store["portfolio"] = portfolioGroups;
  store["skills"] = data[5]?.data;
  store["blog"] = data[6]?.data;
  store["social"] = data[7]?.data;
  store["education"] = data[8]?.data;
  store["experience"] = data[9]?.data;
  store["contact"] = data[10]?.data;


  return {store,loading,error};
};
