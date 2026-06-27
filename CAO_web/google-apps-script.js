/**
 * Google Apps Script - Đồng bộ Form Tư Vấn lên Google Sheet
 * 
 * Hướng dẫn sử dụng:
 * 1. Mở Google Sheet của bạn (ID: 1RmgWMVnSTGkVSgoPsTdI7p_eQjzFQJg_l7UnzIPd9oY).
 * 2. Chọn Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Sao chép và dán toàn bộ đoạn mã này vào.
 * 4. Lưu lại và chọn "Triển khai (Deploy)" -> "Triển khai mới (New deployment)".
 * 5. Cấu hình loại là "Ứng dụng web (Web app)".
 *    - Execute as: Tôi (Me)
 *    - Who has access: Mọi người (Anyone)
 * 6. Nhấn Deploy, xác thực quyền truy cập và copy lại URL của Ứng dụng web (Web app URL).
 */

function doPost(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  if (e.parameter.method === 'OPTIONS') {
    return ContentService.createTextOutput("")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(headers);
  }

  try {
    var jsonString = e.postData.contents;
    var data = JSON.parse(jsonString);

    var spreadsheetId = "1RmgWMVnSTGkVSgoPsTdI7p_eQjzFQJg_l7UnzIPd9oY";
    var sheetName = "Sheet1";
    
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    if (!sheet) {
      throw new Error("Không tìm thấy trang tính với tên: " + sheetName);
    }

    var timestamp = new Date();
    var name = data.name || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var payment = data.payment || "Chưa thanh toán";
    var sendEmail = data.sendEmail || "Chờ gửi";
    var sendZalo = data.sendZalo || "Chờ gửi";
    var note = data.note || "";

    // Đọc từ dữ liệu gửi lên, hoặc sinh ngẫu nhiên nếu không có
    var randomNumbers = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    var orderId = data.orderId || ("AI" + randomNumbers);
    
    // Gắn cố định số tiền
    var amount = data.amount || "19.000đ";

    // Ghi dữ liệu vào cột từ A đến J (10 cột)
    sheet.appendRow([
      timestamp, 
      name, 
      email, 
      phone, 
      payment, 
      sendEmail, 
      sendZalo, 
      note,
      orderId,
      amount
    ]);

    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "message": "Đồng bộ thông tin thành công!" 
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "error", 
      "message": error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ "status": "running" }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({ "Access-Control-Allow-Origin": "*" });
}
