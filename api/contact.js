export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { name, email, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'All fields are required',
      fields: { name: !!name, email: !!email, message: !!message }
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  // Simulate sending email (you can integrate with real email service)
  console.log('Contact form submission:', { name, email, message });
  
  // In real app, you would:
  // - Save to database
  // - Send email notification
  // - Send auto-reply to user
  
  res.status(200).json({ 
    success: true, 
    message: 'Thank you for your message! We will get back to you soon.',
    timestamp: new Date().toISOString()
  });
}