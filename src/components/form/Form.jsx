import React from 'react'
import Input from '../Input'
import Button from '../Button'
import Result from './Result'
import { useState } from 'react'
import './Form.css'

function Form() {
  const [mahasiswa, setMahasiswa] = useState([])
  const [nama, setNama] = useState('')
  const [umur, setUmur] = useState()
  const [alamat, setAlamat] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [telp, setTelp] = useState('')
  const [tampil, setTampil] = useState(true)

  const changeValueNama = (e) => {
    setNama(e.target.value)
  }
  const changeValueUmur = (e) => {
    setUmur(e.target.value)
    console.log(umur)
  }
  const changeValueAlamat = (e) => {
    setAlamat(e.target.value)
  }
  const changeValueJurusan = (e) => {
    setJurusan(e.target.value)
  }

  const changeValueTelp = (e) => {
    setTelp(e.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault()
    if(nama.length === 0 || umur === '' || alamat.length === 0 || jurusan.length === 0 || telp === '') {
      alert('Ada inputan yang masih kosong !!');
    }
    if(nama&&umur&&alamat&&jurusan&&telp) {
      setMahasiswa([
        ...mahasiswa,
        {
            nama : nama,
            umur : umur,
            alamat : alamat,
        }
      ])
    }
  }

  const handleButtonTampil = (e) => {
    e.preventDefault()
    if(tampil === false) {
      setTampil(true)
    }else {
      setTampil(false) 
    }
    console.log(tampil)
  }
  return (
    <>
        <h1>Tambah Mahasiswa</h1>
        <form>
            <Input labelFor="nama" label="Nama" typeInput="text" idInput="nama" nameInput="nama" inputOnchange={changeValueNama}/>
            <Input labelFor="umur" label="Umur" typeInput="number" idInput="umur" nameInput="umur" inputOnchange={changeValueUmur}/>
            <Input labelFor="alamat" label="Alamat" typeInput="text" idInput="alamat" nameInput="alamat" inputOnchange={changeValueAlamat}/>
            <Input labelFor="jurusan" label="Jurusan" typeInput="text" idInput="jurusan" nameInput="jurusan" inputOnchange={changeValueJurusan}/>
            <Input labelFor="telp" label="Telp" typeInput="number" idInput="telp" nameInput="telp" inputOnchange={changeValueTelp}/>
            <Button clickFunction={handleButton} judulButton="Submit"/><br></br>
            <Button clickFunction={handleButtonTampil} judulButton="Tampilkan Data"/>
        </form>
        <div className={tampil === false ? "resultBox" : "resultBox none"}>
            {mahasiswa.map(mhs => {
                return <Result nama={mhs.nama} alamat={mhs.alamat} umur={mhs.umur} jurusan={mhs.jurusan} />
            })}
        </div>
    </>
  )
}

export default Form