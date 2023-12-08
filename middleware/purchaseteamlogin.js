const checkRoleAndDepartment = (requiredRole, requiredDepartment) => {
    return (req, res, next) => {
      const { role, department } = req.body;
  
      if (role === requiredRole && department === requiredDepartment) {
        next(); // Proceed to the next middleware/route
      } else {
        res.status(403).json({ error: 'Unauthorized access' });
      }
    };
  };
  
  // Middleware for purchase team login (role: 'purchase', department: 'purchase')
  const purchaseTeamLoginMiddleware = checkRoleAndDepartment('purchase', 'purchase');
  
  // Route for purchase team login
  app.post('/purchase-team/login', purchaseTeamLoginMiddleware, (req, res) => {
    res.json({ message: 'Purchase team login successful' });
  });
  