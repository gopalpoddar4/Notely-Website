document.getElementById('downloadBtn').addEventListener('click', function() {
    // APK file ka direct download link yahan daalein
    const apkDownloadLink = 'https://www.mediafire.com/file/kw65fb6a31sdwor/Notely%2528V17.0%2529.apk/file';
    
    // Hidden anchor tag create karein
    const link = document.createElement('a');
    link.href = apkDownloadLink;
    link.download = 'NotelyApp.apk'; // APK file ka naam
    document.body.appendChild(link);
    link.click(); // Automatically click karein
    document.body.removeChild(link); // Anchor tag ko remove karein
});

//https://drive.google.com/file/d//view?usp=drivesdk
