from flask import Flask, render_template, request, redirect, url_for, flash
from markupsafe import escape

app = Flask(__name__)
app.secret_key = "change-this-secret-key"

# Home route renders all sections in one page
@app.route("/")
def index():
    # Static data for the portfolio; could be moved to a config later
    data = {
        "name": "Naveen",
        "role": "Data Scientist | AI/ML Engineer | Full‑Stack Developer",
        "about_text": "Data Scientist at Matrimony.com with hands-on experience in Machine Learning, Computer Vision, and Natural Language Processing. Previously, I was an AI Engineer Intern at The Term Time (a UK-based startup) for 2 years and an ML Engineer intern at Vei Technology. I also build full-stack web applications from end-to-end.",
        "email": "naveen16043@gmail.com",
        "phone": "+91 9176186062",
        "linkedin": "https://www.linkedin.com/in/naveen16043",
        "github": "https://github.com/NaveenDhanasekaran",
        "projects": [
            {
                "title": "Loctail Demo",
                "description": "Interactive demonstration showcasing a location-intelligent retail/product discovery app with intelligent recommendations.",
                "link": "https://tinyurl.com/loctaildemo",
                "category": "Location Tech",
            },
            {
                "title": "Medicare-23 Website",
                "description": "Healthcare platform providing comprehensive medical information and services with responsive design.",
                "link": "https://medicare-23.netlify.app/",
                "category": "Healthcare Tech",
            },
            {
                "title": "Agarwal Pipes Website",
                "description": "Professional business website showcasing pipe manufacturing solutions with modern design and user-friendly interface.",
                "link": "https://agarwal-pipes.netlify.app/",
                "category": "Web Development",
            },
            {
                "title": "We4 Website",
                "description": "Modern web application with clean architecture and optimized user experience.",
                "link": "https://we4.netlify.app/",
                "category": "Web Application",
            },
            {
                "title": "Janani Trader Website",
                "description": "Trading platform website with professional design and robust features for an optimal trading experience.",
                "link": "https://janani-trader.netlify.app/",
                "category": "FinTech",
            },
            {
                "title": "Chatbot Development",
                "description": "Intelligent conversational AI systems built to provide instant support and engagement on websites.",
                "link": "#",
                "category": "AI/ML",
            },
        ],
        "experience": [
            {
                "company": "Matrimony.com",
                "role": "Data Scientist",
                "period": "Present",
                "details": [
                    "Building ML/NLP solutions delivering measurable business impact",
                    "End‑to‑end model lifecycle: data, training, deployment"
                ]
            },
            {
                "company": "The Term Time (UK)",
                "role": "AI Engineer Intern",
                "period": "2 years",
                "details": [
                    "Prototyped CV/NLP models and integrated into apps",
                    "MLOps support and experimentation"
                ]
            },
            {
                "company": "Vei Technology",
                "role": "ML Engineer Intern",
                "period": "",
                "details": [
                    "Developed ML models and analytics pipelines"
                ]
            }
        ],
        "skills": {
            "languages": ["Python", "TypeScript/JavaScript", "SQL"],
            "ml": ["PyTorch", "TensorFlow", "scikit‑learn"],
            "ai": ["NLP", "Computer Vision", "RAG", "Agents"],
            "data": ["Pandas", "NumPy", "Airflow"],
            "cloud": ["AWS", "GCP", "Docker"]
        }
    }
    return render_template("index.html", data=data)


@app.route("/contact", methods=["POST"]) 
def contact():
    name = request.form.get("name", "")
    email = request.form.get("email", "")
    message = request.form.get("message", "")

    # In a real app, send an email or store this in a DB.
    # For now, just flash a success message.
    if not message or not email:
        flash("Please provide at least your email and a message.", "error")
    else:
        flash(f"Thanks {escape(name) if name else 'there'}! I'll get back to you at {escape(email)}.", "success")
    return redirect(url_for("index") + "#contact")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
