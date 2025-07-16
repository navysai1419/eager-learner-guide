import React, { useState, useEffect } from 'react';
import { PunchIn, PunchOut, Getattendance } from "@/services/apiservices";
const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { course: 'HTML', date: '', check_in_time: '', check_out_time: '', duration_hours: '' },
  ]);
 
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );
  const [punchStatus, setPunchStatus] = useState({
    status: 'Inactive',
    date: '--',
    punchIn: '--',
    punchOut: '--',
    punchInTime: null,
  });
  const [liveDuration, setLiveDuration] = useState('--');
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);
  // const { token } = useAuth();
 
  // Update current time and live duration every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
 
      if (punchStatus.punchInTime) {
        const punchIn = new Date(punchStatus.punchInTime);
        const durationMs = now.getTime() - punchIn.getTime();
        if (durationMs >= 0) {
          const hours = Math.floor(durationMs / 3600000);
          const minutes = Math.floor((durationMs % 3600000) / 60000);
          setLiveDuration(`${hours}h ${minutes}m`);
        }
      }
    }, 1000);
 
    return () => clearInterval(timer);
  }, [punchStatus]);
 
  const fetchAttendance = async () => {
    try {
      const data = await Getattendance();
      if (Array.isArray(data)) {
        setAttendanceRecords(data);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch attendance history.');
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);
 
  const handlePunchIn = async () => {
    try {
      const data = await PunchIn();
      if (!data) throw new Error('Failed to check in');
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const formattedDate = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
      setPunchStatus({
        status: 'Active',
        date: formattedDate,
        punchIn: formattedTime,
        punchOut: '--',
        punchInTime: now,
      });
      setLiveDuration('0h 0m');
    } catch (err) {
      setError(err.message || 'Failed to record punch-in time.');
    }
  };
 
  const handlePunchOut = async () => {
    if (!punchStatus.punchInTime) return;
    try {
      const data = await PunchOut();
      if (!data) throw new Error('Failed to check out');
      const punchOutTime = new Date();
      const punchInTime = new Date(punchStatus.punchInTime);
      const durationMs = punchOutTime.getTime() - punchInTime.getTime();
      if (durationMs < 0) throw new Error('Invalid duration');
      const hours = Math.floor(durationMs / 3600000);
      const minutes = Math.floor((durationMs % 3600000) / 60000);
      const duration = `${hours}h ${minutes}m`;
      setPunchStatus({
        ...punchStatus,
        status: 'Inactive',
        punchOut: punchOutTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        punchInTime: null,
      });
      setLiveDuration(duration);
      // Reload attendance table after punch out
      await fetchAttendance();
    } catch (err) {
      setError(err.message || 'Failed to record punch-out time.');
    }
  };
 
  const handleImageError = () => {
    setImageError(true);
  };
 
  if (error) {
    return <div className="text-red-600 p-6">Error: {error}</div>;
  }
 
  return (
    <div className="min-h-screen-auto  bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Card 1: Student Profile */}
        {/* <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Student Details</h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="flex flex-row items-center lg:items-start">
              <img
                src={imageError ? 'https://placehold.co/100x100' : 'https://picsum.photos/100'}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mb-4"
                onError={handleImageError}
              />
             <div className='flex flex-col'>
               <h2 className="text-xl px-5 font-semibold">John Doe</h2>
               <div className='flex flex-row p-5 gap-10'>
               <div className="flex flex-col  items-center space-x-2">
                <p className="text-gray-600">Student ID:</p>
                <p className="text-gray-600">STU12345</p>
              </div>
              <div className="flex flex-col items-center space-x-2">
                <p className="text-gray-600">Course:</p>
                <p className="text-gray-600">HTML</p>
              </div>
           </div>
             </div>
            </div>
          </div>
        </div> */}
 
        {/* Card 2: Attendance Control */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Attendance Control</h2>
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-5 Pau gap-4 text-sm">
              <div>
                <span className="font-medium">Status:</span> {punchStatus.status}
              </div>
              <div>
                <span className="font-medium">Date:</span> {punchStatus.date}
              </div>
              <div>
                <span className="font-medium">Punch In:</span> {punchStatus.punchIn}
              </div>
              <div>
                <span className="font-medium">Punch Out:</span> {punchStatus.punchOut}
              </div>
              <div>
                <span className="font-medium">Duration:</span> {liveDuration}
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              {punchStatus.status === 'Active' ? (
                <span className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
                  {currentTime}
                </span>
              ) : (
                <button
                  onClick={handlePunchIn}
                  className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Punch In
                </button>
              )}
              <button
                onClick={handlePunchOut}
                disabled={punchStatus.status !== 'Active'}
                className={`px-4 py-2 rounded-md text-white ${
                  punchStatus.status !== 'Active' ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                Punch Out
              </button>
            </div>
          </div>
        </div>
 
        {/* Card 3: Attendance History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Attendance History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  {/* <th className="p-3">Course</th> */}
                  <th className="p-3">Date</th>
                  <th className="p-3">Check In</th>
                  <th className="p-3">Check Out</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record, index) => {
                  // Convert check_in_time and check_out_time from UTC to IST
                  let dateIST = '--';
                  let checkInIST = '--';
                  let checkOutIST = '--';
                  if (record.check_in_time) {
                    // Parse as UTC and convert to IST
                    const checkInDate = new Date(record.check_in_time + 'Z');
                    dateIST = checkInDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
                    checkInIST = checkInDate.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
                  }
                  if (record.check_out_time) {
                    const checkOutDate = new Date(record.check_out_time + 'Z');
                    checkOutIST = checkOutDate.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
                  }
                  return (
                    <tr key={index} className="border-b">
                      {/* <td className="p-3">HTML</td> */}
                      <td className="p-3">{dateIST}</td>
                      <td className="p-3">{checkInIST}</td>
                      <td className="p-3">{checkOutIST}</td>
                      <td className="p-3">{record.duration_hours}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Attendance;