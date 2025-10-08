import React, { useState, useMemo } from 'react';
import { Phone, MessageCircle, Search, Users, MapPin, Car, Home } from 'lucide-react';

// Sample data structure - Add more apartments following this format
const apartmentsData = [
  {
    flatNo: "B-201",
    ownerName: "",
    ownerPhone: "",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 0,
    nativePlace: "",
    vehicles: []
  },
  {
    flatNo: "B-202",
    ownerName: "ગિગરભાઈ. બી. સાવલીયા",
    ownerPhone: "8200965484",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 3,
    nativePlace: "ઢોળધાર (જામકંડોરણા)",
    vehicles: ["GJ-03-LJ-2881"]
  },
  {
    flatNo: "B-203",
    ownerName: "કિશોરભાઈ. પી. અધેરા",
    ownerPhone: "9428268673",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 3,
    nativePlace: "ગરનાળા (ગીરડલ)",
    vehicles: ["GJ-O3-HB-6607", "GJ-O3-KC-6149"]
  },
  {
    flatNo: "B-204",
    ownerName: "",
    ownerPhone: "",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 0,
    nativePlace: "",
    vehicles: []
  },
  {
    flatNo: "B-205",
    ownerName: "દુલદપભાઈ. આર. દંડકવાડીયા",
    ownerPhone: "9727048500",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 2,
    nativePlace: "માણાવદર",
    vehicles: ["GJ-03-EF-2294", "GJ-11-CN-2501"]
  },
  {
    flatNo: "B-301",
    ownerName: "મહેશભાઈ. એલ. હરાપરા",
    ownerPhone: "9426986495",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 4,
    nativePlace: "જુવારસાર (જૂનાગઢ)",
    vehicles: ["GJ-03-JB-0967", "GJ-03-PF-2337"]
  },
  {
    flatNo: "B-302",
    ownerName: "દલીપભાઈ. એન. ભાલોડીયા",
    ownerPhone: "9723520997",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 3,
    nativePlace: "મેસવાન",
    vehicles: ["GJ-11-BP-6401"]
  },
  {
    flatNo: "B-303",
    ownerName: "રાજકુમાર. આર.વડારીયા",
    ownerPhone: "9879951101",
    type: "ભાડૂઆત",
    tenantName: "અમિતભાઈ એમ લંગણેચા",
    tenantPhone: "7874533015",
    members: 3,
    nativePlace: "ખોરાસા ગીર",
    vehicles: ["GJ-01-LA-2320"]
  },
  {
    flatNo: "B-304",
    ownerName: "પરેશભાઈ. વી. કોરડીયા",
    ownerPhone: "9904521120",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 3,
    nativePlace: "મોટી પાનેલી",
    vehicles: ["GJ-03-MQ-3859"]
  },
  {
    flatNo: "B-305",
    ownerName: "નરેન્દ્ર ભાઈ જી નાદપરા",
    ownerPhone: "9099133504",
    type: "માલિક",
    tenantName: "",
    tenantPhone: "",
    members: 5,
    nativePlace: "સણોસરા (માણાવદર)",
    vehicles: ["GJ-11-PP-7245", "GJ-10-AP-6329"]
  },
  // Add more apartments here following the same structure
];

const ApartmentCard = ({ apartment }) => {
  const displayName = apartment.type === "ભાડૂઆત" ? apartment.tenantName : apartment.ownerName;
  const displayPhone = apartment.type === "ભાડૂઆત" ? apartment.tenantPhone : apartment.ownerPhone;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 border-l-4 border-blue-500">
      {/* Flat Number Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Home className="text-blue-600" size={24} />
          <h3 className="text-2xl font-bold text-gray-800">{apartment.flatNo}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          apartment.type === "માલિક" 
            ? "bg-green-100 text-green-700" 
            : "bg-orange-100 text-orange-700"
        }`}>
          {apartment.type}
        </span>
      </div>

      {/* Owner/Tenant Name */}
      {displayName && (
        <div className="mb-3">
          <p className="text-lg font-semibold text-gray-700">{displayName}</p>
          {apartment.type === "ભાડૂઆત" && apartment.ownerName && (
            <p className="text-sm text-gray-500">માલિક: {apartment.ownerName}</p>
          )}
        </div>
      )}

      {/* Contact Buttons */}
      {displayPhone && (
        <div className="flex gap-2 mb-4">
          <a
            href={`tel:${displayPhone}`}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={18} />
            <span className="font-semibold">કૉલ કરો</span>
          </a>
          <a
            href={`https://wa.me/91${displayPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={18} />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Additional Info */}
      <div className="space-y-2 text-sm">
        {apartment.members > 0 && (
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-blue-500" />
            <span>સભ્યો: {apartment.members}</span>
          </div>
        )}
        
        {apartment.nativePlace && (
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-blue-500" />
            <span>{apartment.nativePlace}</span>
          </div>
        )}

        {apartment.vehicles.length > 0 && (
          <div className="flex items-start gap-2 text-gray-600">
            <Car size={16} className="text-blue-500 mt-1" />
            <div className="flex flex-wrap gap-1">
              {apartment.vehicles.map((vehicle, idx) => (
                <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                  {vehicle}
                </span>
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
          {["બધા", "માલિક", "ભાડૂઆત"].map((type) => (
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