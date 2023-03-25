# MVC Exit-Exam 
63050137 Tanawan Wongphetcharat
Computer Science KMITL  

## Project  
Vue3 + Vuetify3 + Pinia statemanager + Expressjs 
 
## MVVM DesignPattern
Model - ส่วนที่ข้อมูลถูกประมวลผล รับและส่งที่ยังส่วน view และ หลังบ้านผ่าน api ที่สร้างโดยใช้ express js ผ่าน http request 
        ส่วนนี้จะใช้ pinia state manager ในการเก็บ จัดการ และอัพเดท state ต่างๆใน application
        Path = frontend/stores/index.js


View -  ส่วนที่แสดงผล user interface ให้ผู้ใช้ใช้งาน
        path = frontend/views/*.vue

ViewModel -   ส่วนที่ควบคุมการ interact กับ view ส่วนที่ทำให้ผู้ใช้สามารถ input หรือสั่งการได้
              path = App.vue


### Compile and Hot-Reload for Development
  
Frontend
```sh
npm run dev
```
Backend
```sh
node sever.js
```
