export interface Buku{
    id: number,
    kode: string,
    judul: string,
    penerbit: string,
    kategori: string,
    edisi: string,
    bibliografi:string,
    isbn:number,
    deskripsi:string,
    tahun:number,
    kota:string,
    cover:string,
    penulis: string
    lokasi:Lokasi,
    lokasi_id:number
}


export interface Penelitian{
    id: number,
    kode: string,
    npm: string,
    penulis: string
    judul: string,
    jurusan: string,
    pembimbing: string,
    topik: string,
    jenis:string,
    deskripsi:string,
    tahun:number,
    cover:string,
    lokasi:Lokasi,
    lokasi_id:number
}



export interface ItemKarya{
    id:number;
    nomorseri:number;
    nomorview:string;
    keadaaan:string;
    statuspinjam:string;
    catatan:string;
    parent:any;
    jenis:string;
    keadaan:string;
}


export interface Anggota{
    id:number;
    kodeanggota:string;
    nama:string;
    user_id:number,
    nomor_induk:string,
    tempat_lahir:string,
    tanggal_lahir:Date,
    jenis_kelamin:string,
    kewarganegaraan:string,
    agama:string,
    jenis:string,
    aktif:boolean
}

export interface Pemesanan{
    id:number;
    kode:string;
    anggotaid:string;
    anggota:Anggota;
    tanggal:Date;
    status:string;
    items:PemesananItem[];
}



export interface PemesananItem{
    denda: number;
    terlambat: number;
    id:number;
    peminjaman_id:number;
    karyaitemid:number;
    tanggal_kembali:Date;
    parent:any;
    created_at:Date;
    updated_at:Date;
    ItemKarya:ItemKarya;
}

export interface Peminjaman{
    id:number;
    kode:string;
    anggota:Anggota;
    anggotaid:number;
    keterangan:string;
    status:string;
    items:PeminjamanItem[];
    created_at:Date;
    updated_at:Date;
}


export interface PeminjamanItem{
    denda: number;
    terlambat: number;
    id:number;
    peminjaman_id:number;
    karyaitemid:number;
    tanggal_kembali:Date;
    parent:any;
    created_at:Date;
    updated_at:Date;
    ItemKarya:ItemKarya;
}




export interface Pengembalian{
    id:number;
    kode:string;
    peminjaman:Peminjaman;
    items:PengembalianItem[];
    tanggal:Date;
    created_at:Date;
    updated_at:Date;
}




export interface Lokasi{
    id:number;
    nama:string;
    keterangan:string;
    created_at:Date;
    updated_at:Date;
}



export interface PengembalianItem{
    id:number;
    harga: number;
    terlambat: number;
    keadaan:any;
    peminjamanItem:PeminjamanItem;
    created_at:Date;
    updated_at:Date;
}




export interface Setting{
    id: number;
    lamaSewa:number;
    denda:number;
}

