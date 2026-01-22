import React from 'react';
import TambahPertanyaanModal from '../components/forum/TambahPertanyaanModal';

export default function TambahPertanyaanPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <TambahPertanyaanModal isOpen={true} isMobilePage={true} />
        </div>
    );
}
