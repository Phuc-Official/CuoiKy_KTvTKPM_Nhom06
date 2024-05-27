import React, { useState, useEffect } from "react";
import "./TrangDiem.css";
import { getApiDiem } from "../../api/Api";
import img from "../../image/tich.png";
import img1 from "../../image/no.png";
function TrangDiem() {
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };
  const maSV = getQueryParam("maSV");

  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getApiDiem(`/getDiemByMaSV/${maSV}`, { id: maSV });
        console.log("res.data.data:", res.data.data);
        setCsvData(res.data.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        alert("Lỗi khi lấy dữ liệu: " + error.message);
      }
    };
    if (maSV) {
      fetchData();
    }
  }, [maSV]);

  return (
    <div className="bodyDiem">
    <h1>Kết quả học tập</h1>     
      <table className="table">
        <thead>
          <tr>
            <th rowSpan="2">STT</th>
            <th style={{ width: "150px" }} rowSpan="2">Mã lớp</th>
            <th style={{ width: "250px" }} rowSpan="2">Tên môn học</th>
            <th style={{ width: "150px" }} rowSpan="2">Số tín chỉ</th>
            <th colSpan="5" style={{ width: "300px" }}>Điểm lý thuyết</th>
            <th colSpan="5" style={{ width: "300px" }}>Điểm thực hành</th>
            <th rowSpan="2">Điểm GK</th>
            <th rowSpan="2">Điểm CK</th>
            <th rowSpan="2">Điểm tổng kết</th>
            <th rowSpan="2">Điểm 4</th>
            <th rowSpan="2">Điểm chữ</th>
            <th rowSpan="2">Xếp loại</th>
            <th rowSpan="2">Đạt</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index} className="trBodyDiem">
              <td>{index + 1}</td>
              <td>{row.maLopHocPhan}</td>
              <td>{row.tenMonHoc}</td>
              <td>{row.soTC}</td>
              <td>{row.diemLT?.[0] ?? ''}</td>
              <td>{row.diemLT?.[1] ?? ''}</td>
              <td>{row.diemLT?.[2] ?? ''}</td>
              <td>{row.diemLT?.[3] ?? ''}</td>
              <td>{row.diemLT?.[4] ?? ''}</td>
              <td>{row.diemTH?.[0] ?? ''}</td>
              <td>{row.diemTH?.[1] ?? ''}</td>
              <td>{row.diemTH?.[2] ?? ''}</td>
              <td>{row.diemTH?.[3] ?? ''}</td>
              <td>{row.diemTH?.[4] ?? ''}</td>
              <td>{row.diemGK}</td>
              <td>{row.diemCK}</td>
              <td>{row.diemTongKet}</td>
              <td>{row.diem4}</td>
              <td>{row.diemChu}</td>
              <td>{row.xepLoai}</td>
              <td>{row.dat ?  <img src={img} alt="Tích" />  : <img src={img1} alt="no" />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrangDiem;
