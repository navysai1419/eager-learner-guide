import React, { useState, useEffect } from 'react';
 
const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { courseId: 'CS101', date: '2025-07-09', checkIn: '09:00 AM', checkOut: '11:00 AM', duration: '2h' },
    { courseId: 'CS102', date: '2025-07-08', checkIn: '10:00 AM', checkOut: '12:00 PM', duration: '2h' },
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
 
  const handlePunchIn = () => {
    try {
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
      setError('Failed to record punch-in time.');
    }
  };
 
  const handlePunchOut = () => {
    if (!punchStatus.punchInTime) return;
 
    try {
      const punchOutTime = new Date();
      const punchInTime = new Date(punchStatus.punchInTime);
      const durationMs = punchOutTime.getTime() - punchInTime.getTime();
      if (durationMs < 0) throw new Error('Invalid duration');
 
      const hours = Math.floor(durationMs / 3600000);
      const minutes = Math.floor((durationMs % 3600000) / 60000);
      const duration = `${hours}h ${minutes}m`;
 
      setAttendanceRecords([
        ...attendanceRecords,
        {
          courseId: 'CS101',
          date: punchStatus.date,
          checkIn: punchStatus.punchIn,
          checkOut: punchOutTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          duration,
        },
      ]);
 
      setPunchStatus({
        ...punchStatus,
        status: 'Inactive',
        punchOut: punchOutTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        punchInTime: null,
      });
      setLiveDuration(duration);
    } catch (err) {
      setError('Failed to record punch-out time.');
    }
  };
 
  const handleImageError = () => {
    setImageError(true);
  };
 
  if (error) {
    return <div className="text-red-600 p-6">Error: {error}</div>;
  }
 
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Card 1: Student Profile */}
        <div className="bg-white rounded-lg shadow-md p-6">
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
                <p className="text-gray-600">Course ID:</p>
                <p className="text-gray-600">CS101</p>
              </div>
           </div>
             </div>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="w-32 border-l-4 border-green-600 bg-gray-50 rounded-lg p-3">
                <p className="text-gray-600">Total Attendance:</p>
                <p className="text-gray-600 text-sm"><span className='font-bold'>15</span> days</p>
              </div>
              <div className="w-32 border-l-4 border-orange-600 bg-gray-50 rounded-lg p-3">
                <p className="text-gray-600">Late Attendance:</p>
                <p className="text-gray-600 text-sm">15 days</p>
              </div>
              <div className="w-32 border-l-4 border-red-600 bg-gray-50 rounded-lg p-3">
                <p className="text-gray-600">Absent Attendance:</p>
                <p className="text-gray-600 text-sm">15 days</p>
              </div>
            </div>
          </div>
        </div>
 
        {/* Card 2: Attendance Control */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Attendance Control</h2>
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-5 gap-4 text-sm">
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
                  <th className="p-3">Course ID</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Check In</th>
                  <th className="p-3">Check Out</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{record.courseId}</td>
                    <td className="p-3">{record.date}</td>
                    <td className="p-3">{record.checkIn}</td>
                    <td className="p-3">{record.checkOut}</td>
                    <td className="p-3">{record.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Attendance;