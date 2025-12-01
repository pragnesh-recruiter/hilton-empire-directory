import React, { useState, useMemo } from 'react';
import { Phone, MessageCircle, Search, Users, MapPin, Car, Home } from 'lucide-react';

const apartmentsData = [
  {
    "flatNo": "B-201",
    "ownerName": "nan",
    "ownerPhone": "nan",
    "type": "",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 0,
    "nativePlace": "",
    "vehicles": []
  },
  {
    "flatNo": "B-202",
    "ownerName": "જીગરભાઈ. બી. સાવલીયા",
    "ownerPhone": "8200965484",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ઢોળીધાર (જામકંડોરણા)",
    "vehicles": [
      "GJ-03-LJ-2881",
      "GJ-O3-PJ-2739"
    ]
  },
  {
    "flatNo": "B-203",
    "ownerName": "કિશોરભાઈ. પી. અધેરા",
    "ownerPhone": "9428268673",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ગરનાળા (ગોંડલ)",
    "vehicles": [
      "GJ-O3-HB-6607",
      "GJ-O3-KC-6149"
    ]
  },
  {
    "flatNo": "B-204",
    "ownerName": "nan",
    "ownerPhone": "nan",
    "type": "",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 0,
    "nativePlace": "",
    "vehicles": []
  },
  {
    "flatNo": "B-205",
    "ownerName": "કુલદીપભાઈ. આર. દેકીવાડિયા",
    "ownerPhone": "9727048500",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "માણાવદર",
    "vehicles": [
      "GJ-03-EF-2294",
      "GJ-11-CN-2501"
    ]
  },
  {
    "flatNo": "B-301",
    "ownerName": "મહેશભાઈ. એલ. હીરાપરા",
    "ownerPhone": "9426986495",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 4,
    "nativePlace": "લુવારસાર‌ (જુનાગઢ)",
    "vehicles": [
      "GJ-03-JB-0967",
      "GJ-03-PF-2337"
    ]
  },
  {
    "flatNo": "B-302",
    "ownerName": "દિલીપભાઈ. એન. ભાલોડિયા",
    "ownerPhone": "9723520997",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "મેશવાણ",
    "vehicles": [
      "GJ-11-BP-6401"
    ]
  },
  {
    "flatNo": "B-303",
    "ownerName": "રાજકુમાર. આર.વડારીયા",
    "ownerPhone": "9879951101",
    "type": "ભાડુઆત",
    "tenantName": "અમિતભાઈ એમ લંગણેચા",
    "tenantPhone": "7874533015",
    "members": 3,
    "nativePlace": "ખોરાસા ગીર",
    "vehicles": [
      "GJ-01-LA-2320"
    ]
  },
  {
    "flatNo": "B-304",
    "ownerName": "પરેશભાઈ. વી. કોરડિયા",
    "ownerPhone": "9904521120",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "મોટી પાનેલી",
    "vehicles": [
      "GJ-03-MQ-3859"
    ]
  },
  {
    "flatNo": "B-305",
    "ownerName": "નરેન્દ્ર ભાઈ જૅ નાદપરા",
    "ownerPhone": "9099133504",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 5,
    "nativePlace": "સણોસરા (માણાવદર)",
    "vehicles": [
      "GJ-11-PP-7245",
      "GJ-10-AP-6329"
    ]
  },
  {
    "flatNo": "B-401",
    "ownerName": "શૈલેષભાઈ. ડી. આદ્રોજા",
    "ownerPhone": "9033357034",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "નાનડીયા",
    "vehicles": [
      "GJ-03-NQ-4044",
      "GJ-03-NQ-3232",
      "GJ-03-CE-9239"
    ]
  },
  {
    "flatNo": "B-402",
    "ownerName": "ગોપાલભાઈ વી.મણવર",
    "ownerPhone": "9601971056",
    "type": "ભાડુઆત",
    "tenantName": "રેનીશભાઈ જે માનસુરિયા",
    "tenantPhone": "6354693675",
    "members": 3,
    "nativePlace": "ખાગેશ્રી",
    "vehicles": [
      "GJ-25-AB-1303",
      "GJ-12-DM-6401"
    ]
  },
  {
    "flatNo": "B-403",
    "ownerName": "રસિકભાઈ બી છત્રાળા",
    "ownerPhone": "9824804174 7802908006",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ઝાંપોદડ (જુનાગઢ)",
    "vehicles": [
      "GJ-03-CQ-6448",
      "GJ-03-LH-5144",
      "GJ-11-BH-8793"
    ]
  },
  {
    "flatNo": "B-404",
    "ownerName": "જયદિપ જે. લાડાણી",
    "ownerPhone": "9898984303",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "મેશવાણ",
    "vehicles": [
      "GJ-11-NN-2285",
      "GJ-03-JF-9415"
    ]
  },
  {
    "flatNo": "B-405",
    "ownerName": "હરસુખભાઈ. વી. વાછાણી",
    "ownerPhone": "9979433435",
    "type": "ભાડુઆત",
    "tenantName": "રવિભાઈ બી કાંસોદરીયા",
    "tenantPhone": "8160076197",
    "members": 2,
    "nativePlace": "પ્રેમગઢ",
    "vehicles": [
      "GJ-03-JS-8142",
      "GJ-03-FK-1835"
    ]
  },
  {
    "flatNo": "B-501",
    "ownerName": "ગિરિશભાઈ. બી.દલસાણીયા",
    "ownerPhone": "9427738990",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ઝાંપોદડ (જુનાગઢ)",
    "vehicles": [
      "GJ-14-K-9774"
    ]
  },
  {
    "flatNo": "B-502",
    "ownerName": "જગદીશભાઈ જી. ભાલોડિયા",
    "ownerPhone": "8980703573",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ઇશ્વરિયા (પોરબંદર)",
    "vehicles": [
      "GJ-03-LF-9311",
      "GJ-03-MN-9311"
    ]
  },
  {
    "flatNo": "B-503",
    "ownerName": "ચેતનભાઈ જે વાછાણી",
    "ownerPhone": "9879869318",
    "type": "ભાડુઆત",
    "tenantName": "પુનિતકુમાર એ માકડિયા",
    "tenantPhone": "9427270383",
    "members": 5,
    "nativePlace": "ભાયાવદર",
    "vehicles": [
      "GJ-03-DH-7242",
      "GJ-06-BL-9367"
    ]
  },
  {
    "flatNo": "B-504",
    "ownerName": "કાનજીભાઈ એન ભાલોડિયા",
    "ownerPhone": "9724576513",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "અનિડા (ભાલોડી)",
    "vehicles": [
      "GJ-03-JD-2827",
      "GJ-03-DA-7834",
      "GJ-03-NF-0798"
    ]
  },
  {
    "flatNo": "B-505",
    "ownerName": "યશભાઈ એમ જાવિયા",
    "ownerPhone": "9879357762",
    "type": "ભાડુઆત",
    "tenantName": "વિજય ભાઈ. ડી. કાલરીયા",
    "tenantPhone": "9106588502",
    "members": 3,
    "nativePlace": "ઘણેજ બાકુલા (તાલાલા)",
    "vehicles": [
      "GJ-03-FQ-4103",
      "GJ-03-JG-7890",
      "GJ-03-EL-6842"
    ]
  },
  {
    "flatNo": "B-601",
    "ownerName": "વિપુલભાઈ દેત્રોજા",
    "ownerPhone": "9879158043",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "પાજોદ (માણાવદર)",
    "vehicles": [
      "GJ-03-DS-6862",
      "GJ-03-JB-3937",
      "GJ-03-ME-7616"
    ]
  },
  {
    "flatNo": "B-602",
    "ownerName": "હિતેશભાઈ જી.ડઢાણીયા",
    "ownerPhone": "8347381545",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "શેઠ વડાલા (જામજોધપુર)",
    "vehicles": [
      "GJ-03-HL-3192",
      "GJ-03-NP-4126"
    ]
  },
  {
    "flatNo": "B-603",
    "ownerName": "હિરેનભાઈ. પી. પાડલીયા",
    "ownerPhone": "9909413209",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 6,
    "nativePlace": "ભણગોર જામનગર",
    "vehicles": [
      "GJ-03-BN-1396"
    ]
  },
  {
    "flatNo": "B-604",
    "ownerName": "રાજભાઈ પી લાડાણી",
    "ownerPhone": "7777996869",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "કેવદ્રા",
    "vehicles": [
      "GJ-03-LK-6636",
      "GJ-03-BB-7939"
    ]
  },
  {
    "flatNo": "B-605",
    "ownerName": "અનિલભાઈ એમ માકડિયા",
    "ownerPhone": "7567041090",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "ભાયાવદર",
    "vehicles": [
      "GJ-03-KM-3617",
      "GJ-03-LB-0709"
    ]
  },
  {
    "flatNo": "B-701",
    "ownerName": "સુરેશભાઈ આર ગોધાસરા",
    "ownerPhone": "9687874340",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "માતરવાણીયા",
    "vehicles": [
      "GJ-11-BL-9046",
      "GJ-03-JS-1412"
    ]
  },
  {
    "flatNo": "B-702",
    "ownerName": "હાર્દિક એમ ભીમાણી",
    "ownerPhone": "9913173184",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "સણોસરા (માણાવદર)",
    "vehicles": [
      "GJ-05-MB-7502",
      "GJ-03-FK-1068"
    ]
  },
  {
    "flatNo": "B-703",
    "ownerName": "મીતભાઈ આર ગરાળા",
    "ownerPhone": "9099599732",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "ડુમીયાણી (ઉપલેટા)",
    "vehicles": [
      "GJ-03-HP-8523"
    ]
  },
  {
    "flatNo": "B-704",
    "ownerName": "રોહિતભાઈ એમ.ધરશંડિયા",
    "ownerPhone": "9428261860",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "કુતિયાણા",
    "vehicles": [
      "GJ-03-FC-3039"
    ]
  },
  {
    "flatNo": "B-705",
    "ownerName": "કેમિલભાઈ બી પીપલીયા",
    "ownerPhone": "9429322841",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "જૂનાગઢ",
    "vehicles": [
      "GJ-11-AR-3964",
      "GJ-27-CP-8464"
    ]
  },
  {
    "flatNo": "B-801",
    "ownerName": "ધારિતભાઈ ડી મણવર",
    "ownerPhone": "8000093048",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 4,
    "nativePlace": "અરડોઈ",
    "vehicles": [
      "GJ-03-FR-0750",
      "GJ-03-KL-1982",
      "GJ-03-NM-7480",
      "GJ-03-LM-8986"
    ]
  },
  {
    "flatNo": "B-802",
    "ownerName": "જલદીપ સી મણવર",
    "ownerPhone": "9427360201",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 4,
    "nativePlace": "દેસિંગા (માણાવદર)",
    "vehicles": [
      "GJ-03-KN-7650",
      "GJ-03-PD-7654"
    ]
  },
  {
    "flatNo": "B-803",
    "ownerName": "કેયુરભાઈ કે ભાલોડીયા",
    "ownerPhone": "8306792044",
    "type": "ભાડુઆત",
    "tenantName": "સાહિલ એસ. સાપરીયા",
    "tenantPhone": "9726541846",
    "members": 2,
    "nativePlace": "કોઠારી (માણાવદર)",
    "vehicles": [
      "GJ-11-PP-7335",
      "GJ-36-B-8594"
    ]
  },
  {
    "flatNo": "B-804",
    "ownerName": "સાગર આર દલસાણીયા",
    "ownerPhone": "9909555930",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "ગોકરણ (કુતિયાણા)",
    "vehicles": [
      "GJ-03-KD-7488",
      "GJ-03-ED-1974",
      "GJ-36-R-4094"
    ]
  },
  {
    "flatNo": "B-805",
    "ownerName": "પ્રિયાંક આર ભુત",
    "ownerPhone": "7698036233",
    "type": "ભાડુઆત",
    "tenantName": "અંકિતભાઈ ડી વાછાણી",
    "tenantPhone": "9687778797",
    "members": 2,
    "nativePlace": "ખડિયા",
    "vehicles": [
      "GJ-03 HA-9533"
    ]
  },
  {
    "flatNo": "B-901",
    "ownerName": "લવભાઈ એચ કણસાગરા",
    "ownerPhone": "7096011060",
    "type": "ભાડુઆત",
    "tenantName": "ચાંદ પી. ચાનિયારા",
    "tenantPhone": "7778908453",
    "members": 2,
    "nativePlace": "ભાયાવદર (ઉપલેટા)",
    "vehicles": [
      "GJ-03-MA-6130",
      "GJ-03-KL-2306"
    ]
  },
  {
    "flatNo": "B-902",
    "ownerName": "કમલેશ વી માકડિયા",
    "ownerPhone": "7567164537",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ગડવાવ",
    "vehicles": [
      "GJ-03-BE-4403",
      "GJ-11-AE-6493",
      "GJ-03-KF-9324"
    ]
  },
  {
    "flatNo": "B-903",
    "ownerName": "ધવલભાઈ એન પનારા",
    "ownerPhone": "7622820892",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 5,
    "nativePlace": "ખડપીપળી",
    "vehicles": [
      "GJ-11-CM-5307",
      "GJ-11-CE-5307",
      "GJ-11-LL-3050",
      "GJ-11-AS-5307"
    ]
  },
  {
    "flatNo": "B-904",
    "ownerName": "બિપિનભાઈ એમ ભાલોડિયા",
    "ownerPhone": "9909712930\n6356634823",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 5,
    "nativePlace": "ખડિયા",
    "vehicles": [
      "GJ-11-CJ-3436",
      "GJ-03-MA-8636",
      "GJ-11-CK-7469",
      "GJ-03 HA-1801",
      "GJ-14-BB-9571"
    ]
  },
  {
    "flatNo": "B-905",
    "ownerName": "જયસુખભાઈ પી બેરા",
    "ownerPhone": "9601588584",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "અવાણીયા",
    "vehicles": [
      "GJ-03-KA-9204",
      "GJ-03-BG-3269"
    ]
  },
  {
    "flatNo": "B-1001",
    "ownerName": "પ્રવિણભાઈ એસ સેજાણી",
    "ownerPhone": "8866246191",
    "type": "ભાડુઆત",
    "tenantName": "જયેશભાઈ ડી મણવર",
    "tenantPhone": "9998907457",
    "members": 4,
    "nativePlace": "અનિડા (ભાલોડી)",
    "vehicles": [
      "GJ-05-ES-5922",
      "GJ-03-BK-2775"
    ]
  },
  {
    "flatNo": "B-1002",
    "ownerName": "નટવરલાલ ડી કોથડિયા",
    "ownerPhone": "9904584892",
    "type": "ભાડુઆત",
    "tenantName": "બ્રિજેશ એસ કાલરીયા",
    "tenantPhone": "9974875673",
    "members": 3,
    "nativePlace": "ધણેજ બાકુલા (તાલાલા)",
    "vehicles": [
      "GJ-03-EC-9071"
    ]
  },
  {
    "flatNo": "B-1003",
    "ownerName": "પારસ પી ત્રાંબડીયા",
    "ownerPhone": "9712294358",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 4,
    "nativePlace": "સુપેડી (ધોરાજી)",
    "vehicles": [
      "GJ-03-JH-6207",
      "GJ-38-AA-4549"
    ]
  },
  {
    "flatNo": "B-1004",
    "ownerName": "દીપ એસ મારડીયા",
    "ownerPhone": "9510759634",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 0,
    "nativePlace": "મોવાણા (કેશોદ)",
    "vehicles": []
  },
  {
    "flatNo": "B-1005",
    "ownerName": "ગોપાલભાઈ જી કાલરીયા",
    "ownerPhone": "9924867931\n9824865013",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 6,
    "nativePlace": "બાવાની (પીપળી)",
    "vehicles": [
      "GJ-03-EQ-3917",
      "GJ-11-CA-6482",
      "GJ-05-JH-3931"
    ]
  },
  {
    "flatNo": "B-1101",
    "ownerName": "વિવેક કુમાર એ. કનેરિયા",
    "ownerPhone": "9909481475",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "નવા ગળોદર",
    "vehicles": [
      "GJ-11-RR-8458",
      "GJ-11-AS-4514"
    ]
  },
  {
    "flatNo": "B-1102",
    "ownerName": "કિરીટભાઇ આર.વડારીયા",
    "ownerPhone": "7567011670",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "થાણાપીપળી (જુનાગઢ)",
    "vehicles": [
      "GJ-03-BM-8343",
      "GJ-05-SX-7463"
    ]
  },
  {
    "flatNo": "B-1103",
    "ownerName": "કેવલભાઇ એસ ડાંગરોસીયા",
    "ownerPhone": "9033336785",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 5,
    "nativePlace": "ધંટીયા",
    "vehicles": [
      "GJ-03-NG-9883",
      "GJ-11-DD-4211",
      "GJ-11-BM-4715",
      "GJ-01-RU-4637"
    ]
  },
  {
    "flatNo": "B-1104",
    "ownerName": "પંકજભાઈ એમ.ડઢાણીયા",
    "ownerPhone": "6355485582",
    "type": "ભાડુઆત",
    "tenantName": "ઉમેશભાઈ. એન. કણસાગરા",
    "tenantPhone": "9722124521",
    "members": 4,
    "nativePlace": "ગણા ((માણાવદર)",
    "vehicles": [
      "GJ-03-EQ-1341",
      "GJ-03-JQ-0809",
      "GJ-03-CR-8870"
    ]
  },
  {
    "flatNo": "B-1105",
    "ownerName": "ભૌતિક ભાઈ આર. કનેરિયા",
    "ownerPhone": "9537045343",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "નવા ગળોદર",
    "vehicles": [
      "GJ-03-JG-6838"
    ]
  },
  {
    "flatNo": "B-1201",
    "ownerName": "ભાર્ગવભાઈ એચ. પાનસરા",
    "ownerPhone": "9879230048",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "માતરવાણીયા",
    "vehicles": [
      "GJ-11-NN-7568"
    ]
  },
  {
    "flatNo": "B-1202",
    "ownerName": "રાહુલભાઈ. પી. બોરસાણીયા",
    "ownerPhone": "9998143994",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 6,
    "nativePlace": "મેશવાણ",
    "vehicles": [
      "GJ-03-EK-5632",
      "GJ-03-CD-2258",
      "GJ-03-NE-8593",
      "GJ-06-FC-9746"
    ]
  },
  {
    "flatNo": "B-1203",
    "ownerName": "મયંક એચ છત્રાળા",
    "ownerPhone": "7600898343",
    "type": "ભાડુઆત",
    "tenantName": "ભાર્ગવભાઈ એચ ચોખલિયા",
    "tenantPhone": "9409435180",
    "members": 2,
    "nativePlace": "પીપળીયા (ધોરાજી)",
    "vehicles": [
      "GJ-27-J-7630",
      "GJ-16-BG-8501"
    ]
  },
  {
    "flatNo": "B-1204",
    "ownerName": "સાર્થકભાઈ બી કાસુન્દ્રા",
    "ownerPhone": "9879910079",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ક્લાણા",
    "vehicles": [
      "GJ-03-JQ-4237",
      "GJ-03-EL-1267"
    ]
  },
  {
    "flatNo": "B-1205",
    "ownerName": "રવિભાઈ. એસ. વૈષ્ણાની",
    "ownerPhone": "8000339331",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "કોલકી (ઉપલેટા)",
    "vehicles": [
      "GJ-03-KJ-0325",
      "GJ-03-ED-9227",
      "GJ-03-HA-9443"
    ]
  },
  {
    "flatNo": "B-1301",
    "ownerName": "જયભાઈ પી સાપરિયા",
    "ownerPhone": "9925326710",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "ભાલેચડા (માણાવદર)",
    "vehicles": [
      "GJ-03-CP-2212",
      "GJ-05-CH-0095"
    ]
  },
  {
    "flatNo": "B-1302",
    "ownerName": "નીરવભાઈ. એ. કલોલા",
    "ownerPhone": "8530423297",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 2,
    "nativePlace": "જૂનાગઢ",
    "vehicles": [
      "GJ-11-CJ-7955",
      "GJ-11-CL-8061"
    ]
  },
  {
    "flatNo": "B-1303",
    "ownerName": "શ્યામભાઈ એમ ગરધરીયા",
    "ownerPhone": "9408239189",
    "type": "ભાડુઆત",
    "tenantName": "રાજભાઈ વી હિંગળાજીયા",
    "tenantPhone": "9408533495",
    "members": 4,
    "nativePlace": "વાંસજાળિયા",
    "vehicles": [
      "GJ-10-KA-9149"
      "GJ-01-RB-6639"
    ]
  },
  {
    "flatNo": "B-1304",
    "ownerName": "કમલેશભાઈ કે કંટેસરીયા",
    "ownerPhone": "9925032462\n7778001113",
    "type": "ભાડુઆત",
    "tenantName": "રૂચિત આર. જસાણી",
    "tenantPhone": "9428242803",
    "members": 2,
    "nativePlace": "જૂનાગઢ",
    "vehicles": [
      "GJ-11-BP-4452",
      "GJ-11-BK-3446",
      "GJ-01-HY-5137",
      "GJ-03-DN-1996"
    ]
  },
  {
    "flatNo": "B-1305",
    "ownerName": "ઉમેશભાઈ વી પરસાણીયા",
    "ownerPhone": "9979676996",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 4,
    "nativePlace": "ઝાંપોદડ (જૂનાગઢ)",
    "vehicles": [
      "GJ-01-PW-3228",
      "GJ-11-AR-4156",
      "GJ-03-JR-3581"
    ]
  },
  {
    "flatNo": "B-1401",
    "ownerName": "રમેશભાઈ ટી. ધરશંડીયા",
    "ownerPhone": "nan",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 0,
    "nativePlace": "",
    "vehicles": []
  },
  {
    "flatNo": "B-1402",
    "ownerName": "અશોકભાઈ ડી ફળદુ",
    "ownerPhone": "6353281722",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 0,
    "nativePlace": "",
    "vehicles": []
  },
  {
    "flatNo": "B-1403",
    "ownerName": "કૌશલભાઈ. કે. સવસાણી",
    "ownerPhone": "9574564690",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 5,
    "nativePlace": "લિબુડા",
    "vehicles": [
      "GJ-03-NA-9086",
      "GJ-03-NC-9086",
      "GJ-03-NF-9086",
      "GJ-14-AA-6872"
    ]
  },
  {
    "flatNo": "B-1404",
    "ownerName": "કિશનભાઈ એચ ધુલેશિયા",
    "ownerPhone": "9601815691",
    "type": "ભાડુઆત",
    "tenantName": "હર્ષ અશોકભાઈ કાલરીયા",
    "tenantPhone": "9375555589",
    "members": 2,
    "nativePlace": "જામવાડી (જામજોધપુર)",
    "vehicles": [
      "GJ-10-EA-1197",
      "GJ-11-CH-8426"
    ]
  },
  {
    "flatNo": "B-1405",
    "ownerName": "દિલીપભાઈ પી મકવાણા",
    "ownerPhone": "9106091667",
    "type": "માલિક",
    "tenantName": "nan",
    "tenantPhone": "nan",
    "members": 3,
    "nativePlace": "કોયલી",
    "vehicles": [
      "GJ-03-DR-2588",
      "GJ-05-AS-7859"
    ]
  },
];

const ApartmentCard = ({ apartment }) => {
  // Use exact string used in your data
  const isTenant = apartment.type === "ભાડુઆત";

  // Choose contact phone (tenant when rented, otherwise owner)
  const contactRaw = isTenant ? apartment.tenantPhone : apartment.ownerPhone;

  // Helper: sanitize phone -> return last 10 digits (or '' if none)
  const sanitizePhone = (p) => {
    if (!p || p === "nan") return "";
    const digits = String(p).replace(/\D/g, "");
    if (!digits) return "";
    return digits.length >= 10 ? digits.slice(-10) : digits;
  };

  const phoneDigits = sanitizePhone(contactRaw);
  const telHref = phoneDigits ? `tel:+91${phoneDigits}` : null;
  const waHref = phoneDigits ? `https://wa.me/91${phoneDigits}` : null;

  // Display-friendly names (hide literal "nan")
  const ownerName = apartment.ownerName && apartment.ownerName !== "nan" ? apartment.ownerName : "";
  const tenantName = apartment.tenantName && apartment.tenantName !== "nan" ? apartment.tenantName : "";

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 border-l-4 border-blue-500">
      {/* Flat Number Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Home className="text-blue-600" size={24} />
          <h3 className="text-2xl font-bold text-gray-800">{apartment.flatNo || "—"}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          apartment.type === "માલિક"
            ? "bg-green-100 text-green-700"
            : apartment.type === "ભાડુઆત"
              ? "bg-orange-100 text-orange-700"
              : "bg-gray-100 text-gray-700"
        }`}>
          {apartment.type || "—"}
        </span>
      </div>

      {/* Owner & Tenant Names */}
      <div className="mb-3">
        {isTenant ? (
          <>
            <p className="text-lg font-semibold text-gray-700">
              ભાડુઆત: {tenantName || "—"}
            </p>
            {ownerName && (
              <p className="text-sm text-gray-500">માલિક: {ownerName}</p>
            )}
          </>
        ) : (
          <p className="text-lg font-semibold text-gray-700">
            {ownerName || "—"}
          </p>
        )}
      </div>

      {/* Contact Buttons (only show if we have usable digits) */}
      {phoneDigits ? (
        <div className="flex gap-2 mb-4">
          <a
            href={telHref}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={18} />
            <span className="font-semibold">કૉલ કરો</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={18} />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>
      ) : null}

      {/* Additional Info */}
      <div className="space-y-2 text-sm">
        {apartment.members > 0 && (
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-blue-500" />
            <span>સભ્યો: {apartment.members}</span>
          </div>
        )}

        {apartment.nativePlace && apartment.nativePlace !== "nan" && (
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-blue-500" />
            <span>{apartment.nativePlace}</span>
          </div>
        )}

        {Array.isArray(apartment.vehicles) && apartment.vehicles.length > 0 && (
          <div className="flex items-start gap-2 text-gray-600">
            <Car size={16} className="text-blue-500 mt-1" />
            <div className="flex flex-wrap gap-1">
              {apartment.vehicles.map((vehicle, idx) => (
                vehicle && vehicle !== "nan" ? (
                  <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {vehicle}
                  </span>
                ) : null
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HiltonEmpireDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("બધા");

  // Filter and search logic
  const filteredApartments = useMemo(() => {
    return apartmentsData.filter(apt => {
      // Filter by type
      if (filterType !== "બધા" && apt.type !== filterType) {
        return false;
      }

      // Search in multiple fields
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        return (
          apt.flatNo.toLowerCase().includes(search) ||
          apt.ownerName.toLowerCase().includes(search) ||
          apt.tenantName.toLowerCase().includes(search) ||
          apt.nativePlace.toLowerCase().includes(search) ||
          apt.vehicles.some(v => v.toLowerCase().includes(search))
        );
      }

      return true;
    });
  }, [searchTerm, filterType]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Hilton Empire B Wing</h1>
          <p className="text-center text-blue-100">રહેવાસી ડિરેક્ટરી</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="નામ, ફ્લેટ નંબર, અથવા વાહન નંબર દ્વારા શોધો..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {["બધા", "માલિક", "ભાડુઆત"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filterType === type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          <p className="font-semibold">કુલ પરિણામો: {filteredApartments.length}</p>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApartments.map((apartment) => (
            <ApartmentCard key={apartment.flatNo} apartment={apartment} />
          ))}
        </div>

        {/* No Results */}
        {filteredApartments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">કોઈ પરિણામ મળ્યા નથી</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Hilton Empire B Wing - રહેવાસી ડિરેક્ટરી</p>
        </div>
      </div>
    </div>
  );
};

export default HiltonEmpireDirectory;
