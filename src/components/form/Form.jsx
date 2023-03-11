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

  const changeValueNama = (e) => {
    setNama(e.target.value)
  }
  const changeValueUmur = (e) => {
    setUmur(e.target.value)
  }
  const changeValueAlamat = (e) => {
    setAlamat(e.target.value)
  }
  const changeValueJurusan = (e) => {
    setJurusan(e.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault()
    setMahasiswa([
        ...mahasiswa,
        {
            nama : nama,
            umur : umur,
            alamat : alamat,
            jurusan : jurusan
        }
    ])
    console.log(mahasiswa)
  }
  return (
    <>
        <h1>Tambah Mahasiswa</h1>
        <form>
            <Input labelFor="nama" label="Nama" typeInput="text" idInput="nama" nameInput="nama" inputOnchange={changeValueNama}/>
            <Input labelFor="umur" label="Umur" typeInput="number" idInput="umur" nameInput="umur" inputOnchange={changeValueUmur}/>
            <Input labelFor="alamat" label="Alamat" typeInput="text" idInput="alamat" nameInput="alamat" inputOnchange={changeValueAlamat}/>
            <Input labelFor="jurusan" label="Jurusan" typeInput="text" idInput="jurusan" nameInput="jurusan" inputOnchange={changeValueJurusan}/>
            <div className="btnSubmit">
                <Button clickFunction={handleButton} judulButton="Submit"/>
            </div>
        </form>
        <h1>Daftar Mahasiswa</h1>
        <div className="resultBox">
            {mahasiswa.map(mhs => {
                return <Result nama={mhs.nama} alamat={mhs.alamat} umur={mhs.umur} jurusan={mhs.jurusan} />
            })}
        </div>
    </>
  )
}

export default Form