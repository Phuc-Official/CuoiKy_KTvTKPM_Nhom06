import React, { useState, useEffect, useCallback } from "react";
import { getApiLHP } from "../../api/Api";

function ThoiKhoaBieu({ action }) {
  const [maSV, setMaSV] = useState("");
  const [listLHPBySv, setListLHPBySv] = useState([]);
  const [startDate, setStartDate] = useState(new Date(2024, 4, 20)); // Định nghĩa state và setter cho startDate


  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function getWeekDates(startDate) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      dates.push(formatDate(currentDate));
    }
    return dates;
  }

  const daysOfWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const timetable = {
    "Thứ Hai": [],
    "Thứ Ba": [],
    "Thứ Tư": [],
    "Thứ Năm": [],
    "Thứ Sáu": [],
    "Thứ Bảy": [],
    "Chủ Nhật": []
  };

  useEffect(() => {
    if (action === "prev") {
      setStartDate(
        (prevStartDate) =>
          new Date(prevStartDate.getTime() - 7 * 24 * 60 * 60 * 1000)
      ); // Giảm 7 ngày
    } else if (action === "next") {
      setStartDate(
        (prevStartDate) =>
          new Date(prevStartDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      ); // Tăng 7 ngày
    }
  }, [action]);

  const dates = getWeekDates(startDate);

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const maSVFromUrl = getQueryParam("maSV");
    if (maSVFromUrl) {
      setMaSV(maSVFromUrl);
    }
  }, []);

  const getLHPBySv = useCallback(async () => {
    try {
      const response = await getApiLHP("/getListLopHocPhanByMaSV/" + maSV);
      setListLHPBySv(response.data.data);
    } catch (error) {
      console.log("Lỗi get list", error);
    }
  }, [maSV]);

  useEffect(() => {
    if (maSV) {
      getLHPBySv();
    }
  }, [maSV, getLHPBySv]);

  const determineSession = (tietHoc) => {
    const [start, end] = tietHoc.split("-").map(Number);
    if (start >= 1 && end <= 6) return "Buổi sáng";
    if (start >= 7 && end <= 12) return "Buổi trưa";
    if (start >= 13 && end <= 19) return "Buổi tối";
    return "Unknown";
  };

  listLHPBySv.forEach((lhp) => {
    const { dayOfWeek, tietHoc, tenMonHoc, giangVien, phongHoc, namHoc, hocKy } = lhp;
    if (timetable[dayOfWeek]) {
      const session = determineSession(tietHoc);
      timetable[dayOfWeek].push({ tietHoc, tenMonHoc, giangVien, phongHoc, namHoc, hocKy, session });
    }
  });

  return (
    <div className="body">
      <table
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          position: "relative",
          top: "-150px",
          flexDirection: "column",
        }}
      >
        <thead>
          <tr className="trTHTKB" style={{ width: "100%" }}>
            <th>Ca học</th>
            {daysOfWeek.map((day, index) => (
              <th key={day}>
                {day}
                <br />
                {dates[index]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="trTHTKB">
            <td>Sáng</td>
            {daysOfWeek.map((day) => (
              <td key={`morning-${day}`}>
                {timetable[day].filter(item => item.session === "Buổi sáng").map(item => (
                  <div key={item.tenMonHoc} className="class-info">
                    {item.tenMonHoc} - Giảng viên: {item.giangVien} - Phòng: {item.phongHoc} - Tiết: {item.tietHoc}
                  </div>
                ))}
              </td>
            ))}
          </tr>
          <tr className="trTHTKB">
            <td>Chiều</td>
            {daysOfWeek.map((day) => (
              <td key={`afternoon-${day}`}>
                {timetable[day].filter(item => item.session === "Buổi trưa").map(item => (
                  <div key={item.tenMonHoc} className="class-info">
                  {item.tenMonHoc} - Giảng viên: {item.giangVien} - Phòng: {item.phongHoc} - Tiết: {item.tietHoc}
                  </div>
                ))}
              </td>
            ))}
          </tr>
          <tr className="trTHTKB">
            <td>Tối</td>
            {daysOfWeek.map((day) => (
              <td key={`evening-${day}`}>
                {timetable[day].filter(item => item.session === "Buổi tối").map(item => (
                  <div key={item.tenMonHoc} className="class-info">
                  {item.tenMonHoc} - Giảng viên: {item.giangVien} - Phòng: {item.phongHoc} - Tiết: {item.tietHoc}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThoiKhoaBieu;
