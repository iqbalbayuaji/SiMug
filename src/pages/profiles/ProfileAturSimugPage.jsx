import { useState } from 'react';
import { FaChevronDown, FaLock } from 'react-icons/fa';
import mascot1 from '../../assets/maskot/mascot1.png';
import mascot2 from '../../assets/maskot/mascot2.png';
import mascot3 from '../../assets/maskot/mascot3.png';
import mascot4 from '../../assets/maskot/mascot4.png';
import mascot5 from '../../assets/maskot/mascot5.png';
import mascot6 from '../../assets/maskot/mascot6.png';
import boss1 from '../../assets/maskot/boss 1.png';

const ProfileAturSimugPage = ({ onMascotSelect }) => {
  const [selectedMascot, setSelectedMascot] = useState(null);
  const [lockedMascot, setLockedMascot] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleConfirmSelection = () => {
    if (selectedMascot) {
      setLockedMascot(selectedMascot);
      // Find the selected mascot and pass its image to parent
      const selected = mascots.find(m => m.id === selectedMascot);
      if (selected && onMascotSelect) {
        onMascotSelect(selected.image);
      }
    }
  };

  const mascots = [
    { id: 1, image: mascot1, name: 'Mascot 1' },
    { id: 2, image: mascot2, name: 'Mascot 2' },
    { id: 3, image: mascot3, name: 'Mascot 3' },
    { id: 4, image: mascot4, name: 'Mascot 4' },
    { id: 5, image: mascot5, name: 'Mascot 5' },
    { id: 6, image: mascot6, name: 'Mascot 6' },
    { id: 7, image: boss1, name: 'Boss 1' },
    { id: 8, image: mascot1, name: 'Mascot 1' },
    { id: 9, image: mascot2, name: 'Mascot 2' },
    { id: 10, image: mascot3, name: 'Mascot 3' },
    { id: 11, image: mascot4, name: 'Mascot 4' },
    { id: 12, image: mascot5, name: 'Mascot 5' },
  ];

  return (
    <div className="">
      <div className="block lg:hidden mb-6 items-center justify-between">
        <div className='mb-3'>
          <h2 className="text-2xl font-bold text-gray-800">Pilih Skin Mugion</h2>
          <p className="text-gray-600">Silahkan pilih skin andalanmu:</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-6 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: '#F0F5FF', color: '#4177FF' }}
            >
              <span className="font-medium">Semua</span>
              <FaChevronDown className={`text-sm transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-100">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Semua
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Olahraga
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Makanan
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Lainnya
                </button>
              </div>
            )}
          </div>

          {/* Pilih Button */}
          <button
            onClick={handleConfirmSelection}
            disabled={!selectedMascot}
            className={`px-8 py-2 text-white rounded-lg transition-all ${selectedMascot ? 'hover:opacity-90' : 'cursor-not-allowed'
              }`}
            style={{
              backgroundColor: '#4177FF',
              opacity: selectedMascot ? 1 : 0.5
            }}
          >
            Pilih
          </button>
        </div>
      </div>

      <div className="hidden lg:flex mb-6 items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Pilih Skin Mugion</h2>
          <p className="text-gray-600">Silahkan pilih skin andalanmu:</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-6 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: '#F0F5FF', color: '#4177FF' }}
            >
              <span className="font-medium">Semua</span>
              <FaChevronDown className={`text-sm transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-100">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Semua
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Olahraga
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Makanan
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                  Lainnya
                </button>
              </div>
            )}
          </div>

          {/* Pilih Button */}
          <button
            onClick={handleConfirmSelection}
            disabled={!selectedMascot}
            className={`px-8 py-2 text-white rounded-lg transition-all ${selectedMascot ? 'hover:opacity-90' : 'cursor-not-allowed'
              }`}
            style={{
              backgroundColor: '#4177FF',
              opacity: selectedMascot ? 1 : 0.5
            }}
          >
            Pilih
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {mascots.map((mascot) => {
          const isLocked = lockedMascot === mascot.id;
          const isSelected = selectedMascot === mascot.id;

          return (
            <div
              key={mascot.id}
              onClick={() => !isLocked && setSelectedMascot(mascot.id)}
              className={`relative rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-300 hover:shadow-lg group ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              style={{
                background: isLocked
                  ? '#9CA3AF'
                  : isSelected
                    ? 'linear-gradient(180deg, #A6BFFF 0%, #4177FF 100%)'
                    : '#f3f4f6'
              }}
            >
              {!isLocked && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(180deg, #A6BFFF 0%, #4177FF 100%)'
                  }}
                />
              )}

              <div className="aspect-square flex items-center justify-center relative z-10">
                <img
                  src={mascot.image}
                  alt={mascot.name}
                  className={`w-full h-full object-contain transition-all duration-300 ${isLocked ? 'opacity-30' : ''
                    }`}
                />

                {isLocked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="bg-white rounded-full p-4 mb-3">
                      <FaLock className="text-gray-700 text-2xl" />
                    </div>
                    <p className="text-white font-semibold text-lg">TERKUNCI</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileAturSimugPage;
