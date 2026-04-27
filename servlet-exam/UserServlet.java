import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/UserServlet")
public class UserServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Retrieve data from form
        String name = request.getParameter("userName");
        String email = request.getParameter("userEmail");
        String age = request.getParameter("userAge");
        String city = request.getParameter("userCity");
        
        // Set response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        // Output the HTML table
        out.println("<html>");
        out.println("<head><title>User Details</title>");
        out.println("<style>");
        out.println("table { border-collapse: collapse; width: 50%; margin-top: 20px; }");
        out.println("th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }");
        out.println("th { background-color: #2563eb; color: white; }");
        out.println("</style>");
        out.println("</head>");
        out.println("<body>");
        
        out.println("<h2>Submitted User Details</h2>");
        out.println("<table>");
        out.println("<tr><th>Field</th><th>Detail</th></tr>");
        out.println("<tr><td><b>Name</b></td><td>" + name + "</td></tr>");
        out.println("<tr><td><b>Email</b></td><td>" + email + "</td></tr>");
        out.println("<tr><td><b>Age</b></td><td>" + age + "</td></tr>");
        out.println("<tr><td><b>City</b></td><td>" + city + "</td></tr>");
        out.println("</table>");
        
        out.println("<br><a href='index.html'>Go Back</a>");

        out.println("<div style='position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px; background: white; text-align: center; font-weight: bold; color: #666; border-top: 1px solid #ccc; z-index: 100;'>");
        out.println("24071A05M1 || THURUPATI RENU MANEESH");
        out.println("</div>");

        out.println("</body>");
        out.println("</html>");
    }
}
