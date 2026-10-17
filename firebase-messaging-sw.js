import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js";

const messaging = getMessaging(app);

// دالة طلب تفعيل الإشعارات
async function requestNotificationPermission() {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('تم منح إذن الإشعارات بنجاح.');
            // الحصول على رمز الجهاز (Token) لإرسال الإشعارات إليه مستقبلاً
            const token = await getToken(messaging, { 
                vapidKey: 'ضع_مفتاح_VAPID_الخاص بك_هنا_إن وجد_أو_اتركه_فارغاً' 
            });
            if (token) {
                console.log("رمز الجهاز للإشعارات:", token);
                // يمكنك حفظ هذا الرمز في قاعدة البيانات لتوجيه الإشعارات لهذا الجهاز بالذات
            }
        } else {
            console.log('تم رفض إذن الإشعارات.');
        }
    } catch (error) {
        console.error('خطأ أثناء طلب إذن الإشعارات:', error);
    }
}

// استدعاء الدالة عند أول تصفح أو إدراج زر مخصص لتفعيل التنبيهات
// requestNotificationPermission();
