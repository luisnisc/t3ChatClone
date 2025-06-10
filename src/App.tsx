import { useEffect, useState } from "react";
import Input from "./components/Input";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [Messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello, how can I help you today?",
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      content: "I have a question about my order.",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "3",
      content: "How do I create a React component?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "4",
      content:
        'Here\'s a simple React functional component example:\n```jsx\nfunction Greeting({ name }) {\n  return (\n    <div className="greeting">\n      <h1>Hello, {name}!</h1>\n      <p>Welcome to our application.</p>\n    </div>\n  );\n}\n\nexport default Greeting;\n```',
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "5",
      content: "Can you show me how to fetch data in React?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "6",
      content:
        "Here's how to fetch data using React hooks:\n```jsx\nimport { useState, useEffect } from 'react';\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    async function fetchData() {\n      try {\n        const response = await fetch('https://api.example.com/data');\n        if (!response.ok) {\n          throw new Error('Network response was not ok');\n        }\n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    }\n\n    fetchData();\n  }, []);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n\n  return (\n    <div>\n      <h2>Data:</h2>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n```",
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "7",
      content: "How do I style components with Tailwind CSS?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "8",
      content:
        'Here\'s an example of styling with Tailwind CSS:\n```jsx\nfunction Card() {\n  return (\n    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">\n      <div className="px-6 py-4">\n        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Card Title</div>\n        <p className="text-gray-700 dark:text-gray-300 text-base">\n          This is a simple card component styled with Tailwind CSS.\n        </p>\n      </div>\n      <div className="px-6 pt-4 pb-2">\n        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">#tailwind</span>\n        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">#react</span>\n      </div>\n    </div>\n  );\n}\n```',
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "9",
      content: "Can you show me a Python example for data analysis?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "10",
      content:
        "Here's a Python example using pandas for data analysis:\n```python\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create sample data\ndata = {\n    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'age': [25, 30, 35, 28],\n    'salary': [50000, 60000, 70000, 55000],\n    'department': ['Engineering', 'Marketing', 'Engineering', 'Sales']\n}\n\n# Create DataFrame\ndf = pd.DataFrame(data)\n\n# Basic analysis\nprint(\"Dataset Overview:\")\nprint(df.head())\nprint(\"\\nBasic Statistics:\")\nprint(df.describe())\n\n# Group by department\ndept_analysis = df.groupby('department')['salary'].agg(['mean', 'count'])\nprint(\"\\nSalary by Department:\")\nprint(dept_analysis)\n\n# Create visualization\nplt.figure(figsize=(10, 6))\nplt.subplot(1, 2, 1)\ndf['department'].value_counts().plot(kind='bar')\nplt.title('Employees by Department')\n\nplt.subplot(1, 2, 2)\ndf.boxplot(column='salary', by='department')\nplt.title('Salary Distribution by Department')\nplt.show()\n```",
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "11",
      content: "What about a Node.js Express server example?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "12",
      content:
        "Here's a complete Node.js Express server with middleware:\n```javascript\nconst express = require('express');\nconst cors = require('cors');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\nconst mongoose = require('mongoose');\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middleware\napp.use(helmet()); // Security headers\napp.use(cors()); // Enable CORS\napp.use(express.json({ limit: '10mb' })); // Parse JSON bodies\napp.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies\n\n// Rate limiting\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: 'Too many requests from this IP, please try again later.'\n});\napp.use('/api/', limiter);\n\n// Database connection\nmongoose.connect('mongodb://localhost:27017/myapp', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n});\n\n// User schema\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// Routes\napp.get('/api/users', async (req, res) => {\n  try {\n    const users = await User.find().select('-__v');\n    res.json({ success: true, data: users });\n  } catch (error) {\n    res.status(500).json({ success: false, error: error.message });\n  }\n});\n\napp.post('/api/users', async (req, res) => {\n  try {\n    const { name, email } = req.body;\n    const user = new User({ name, email });\n    await user.save();\n    res.status(201).json({ success: true, data: user });\n  } catch (error) {\n    res.status(400).json({ success: false, error: error.message });\n  }\n});\n\n// Error handling middleware\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ success: false, error: 'Something went wrong!' });\n});\n\n// Start server\napp.listen(PORT, () => {\n  console.log(`🚀 Server running on port ${PORT}`);\n  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);\n});\n```",
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "13",
      content: "Show me a Java class example with Spring Boot?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "14",
      content:
        'Here\'s a Spring Boot REST controller with JPA:\n```java\npackage com.example.demo.controller;\n\nimport com.example.demo.entity.Product;\nimport com.example.demo.service.ProductService;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport javax.validation.Valid;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping("/api/products")\n@CrossOrigin(origins = "http://localhost:3000")\npublic class ProductController {\n\n    @Autowired\n    private ProductService productService;\n\n    @GetMapping\n    public ResponseEntity<Page<Product>> getAllProducts(Pageable pageable) {\n        try {\n            Page<Product> products = productService.findAll(pageable);\n            return ResponseEntity.ok(products);\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();\n        }\n    }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<Product> getProductById(@PathVariable Long id) {\n        Optional<Product> product = productService.findById(id);\n        return product.map(ResponseEntity::ok)\n                     .orElse(ResponseEntity.notFound().build());\n    }\n\n    @PostMapping\n    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {\n        try {\n            Product savedProduct = productService.save(product);\n            return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();\n        }\n    }\n\n    @PutMapping("/{id}")\n    public ResponseEntity<Product> updateProduct(\n            @PathVariable Long id, \n            @Valid @RequestBody Product productDetails) {\n        \n        Optional<Product> optionalProduct = productService.findById(id);\n        \n        if (optionalProduct.isPresent()) {\n            Product product = optionalProduct.get();\n            product.setName(productDetails.getName());\n            product.setPrice(productDetails.getPrice());\n            product.setDescription(productDetails.getDescription());\n            product.setCategory(productDetails.getCategory());\n            \n            Product updatedProduct = productService.save(product);\n            return ResponseEntity.ok(updatedProduct);\n        } else {\n            return ResponseEntity.notFound().build();\n        }\n    }\n\n    @DeleteMapping("/{id}")\n    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {\n        if (productService.existsById(id)) {\n            productService.deleteById(id);\n            return ResponseEntity.noContent().build();\n        } else {\n            return ResponseEntity.notFound().build();\n        }\n    }\n\n    @GetMapping("/search")\n    public ResponseEntity<Page<Product>> searchProducts(\n            @RequestParam String keyword, \n            Pageable pageable) {\n        \n        Page<Product> products = productService.searchByNameContaining(keyword, pageable);\n        return ResponseEntity.ok(products);\n    }\n}\n```',
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "15",
      content: "Can you show me a CSS Grid layout example?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "16",
      content:
        'Here\'s a responsive CSS Grid layout:\n```css\n/* Modern CSS Grid Layout */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    "header header header"\n    "sidebar main aside"\n    "footer footer footer";\n  gap: 1rem;\n  min-height: 100vh;\n  padding: 1rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.header {\n  grid-area: header;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n\n.main-content {\n  grid-area: main;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n}\n\n.aside {\n  grid-area: aside;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n\n.footer {\n  grid-area: footer;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 1rem 2rem;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n/* Card Grid System */\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin: 2rem 0;\n}\n\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n\n.card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #667eea, #764ba2);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n\n.card:hover::before {\n  transform: scaleX(1);\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .grid-container {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main"\n      "sidebar"\n      "aside"\n      "footer";\n  }\n  \n  .card-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 480px) {\n  .grid-container {\n    padding: 0.5rem;\n    gap: 0.5rem;\n  }\n  \n  .header, .main-content, .sidebar, .aside, .footer {\n    padding: 1rem;\n  }\n}\n```',
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "17",
      content: "What about a TypeScript interface example?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "18",
      content:
        "Here's a comprehensive TypeScript example with interfaces and generics:\n```typescript\n// Advanced TypeScript interfaces and generics\n\n// Base interfaces\ninterface BaseEntity {\n  id: string;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\ninterface User extends BaseEntity {\n  email: string;\n  firstName: string;\n  lastName: string;\n  role: UserRole;\n  profile?: UserProfile;\n}\n\ninterface UserProfile {\n  avatar?: string;\n  bio?: string;\n  website?: string;\n  socialLinks: SocialLinks;\n  preferences: UserPreferences;\n}\n\ninterface SocialLinks {\n  twitter?: string;\n  linkedin?: string;\n  github?: string;\n}\n\ninterface UserPreferences {\n  theme: 'light' | 'dark' | 'auto';\n  notifications: NotificationSettings;\n  privacy: PrivacySettings;\n}\n\ninterface NotificationSettings {\n  email: boolean;\n  push: boolean;\n  sms: boolean;\n  frequency: 'immediate' | 'daily' | 'weekly';\n}\n\ninterface PrivacySettings {\n  profileVisibility: 'public' | 'private' | 'friends';\n  showEmail: boolean;\n  showLastSeen: boolean;\n}\n\n// Enums\nenum UserRole {\n  ADMIN = 'admin',\n  MODERATOR = 'moderator',\n  USER = 'user',\n  GUEST = 'guest'\n}\n\n// Generic interfaces\ninterface ApiResponse<T> {\n  success: boolean;\n  data?: T;\n  error?: string;\n  message?: string;\n  metadata?: ResponseMetadata;\n}\n\ninterface ResponseMetadata {\n  total?: number;\n  page?: number;\n  limit?: number;\n  hasNext?: boolean;\n  hasPrevious?: boolean;\n}\n\ninterface Repository<T extends BaseEntity> {\n  findById(id: string): Promise<T | null>;\n  findAll(options?: QueryOptions): Promise<T[]>;\n  create(entity: Omit<T, keyof BaseEntity>): Promise<T>;\n  update(id: string, updates: Partial<T>): Promise<T | null>;\n  delete(id: string): Promise<boolean>;\n}\n\ninterface QueryOptions {\n  limit?: number;\n  offset?: number;\n  sortBy?: string;\n  sortOrder?: 'asc' | 'desc';\n  filters?: Record<string, any>;\n}\n\n// Service class implementing the repository pattern\nclass UserService implements Repository<User> {\n  private users: User[] = [];\n\n  async findById(id: string): Promise<User | null> {\n    return this.users.find(user => user.id === id) || null;\n  }\n\n  async findAll(options: QueryOptions = {}): Promise<User[]> {\n    let result = [...this.users];\n    \n    // Apply filters\n    if (options.filters) {\n      result = result.filter(user => {\n        return Object.entries(options.filters!).every(([key, value]) => {\n          return (user as any)[key] === value;\n        });\n      });\n    }\n    \n    // Apply sorting\n    if (options.sortBy) {\n      result.sort((a, b) => {\n        const aValue = (a as any)[options.sortBy!];\n        const bValue = (b as any)[options.sortBy!];\n        const modifier = options.sortOrder === 'desc' ? -1 : 1;\n        return aValue > bValue ? modifier : -modifier;\n      });\n    }\n    \n    // Apply pagination\n    if (options.offset !== undefined || options.limit !== undefined) {\n      const start = options.offset || 0;\n      const end = options.limit ? start + options.limit : undefined;\n      result = result.slice(start, end);\n    }\n    \n    return result;\n  }\n\n  async create(userData: Omit<User, keyof BaseEntity>): Promise<User> {\n    const user: User = {\n      ...userData,\n      id: crypto.randomUUID(),\n      createdAt: new Date(),\n      updatedAt: new Date()\n    };\n    \n    this.users.push(user);\n    return user;\n  }\n\n  async update(id: string, updates: Partial<User>): Promise<User | null> {\n    const userIndex = this.users.findIndex(user => user.id === id);\n    \n    if (userIndex === -1) return null;\n    \n    this.users[userIndex] = {\n      ...this.users[userIndex],\n      ...updates,\n      updatedAt: new Date()\n    };\n    \n    return this.users[userIndex];\n  }\n\n  async delete(id: string): Promise<boolean> {\n    const userIndex = this.users.findIndex(user => user.id === id);\n    \n    if (userIndex === -1) return false;\n    \n    this.users.splice(userIndex, 1);\n    return true;\n  }\n}\n\n// Utility types\ntype CreateUserRequest = Omit<User, keyof BaseEntity | 'profile'> & {\n  profile?: Omit<UserProfile, 'socialLinks' | 'preferences'> & {\n    socialLinks?: Partial<SocialLinks>;\n    preferences?: Partial<UserPreferences>;\n  };\n};\n\ntype UserUpdateRequest = Partial<Pick<User, 'firstName' | 'lastName' | 'email'>> & {\n  profile?: Partial<UserProfile>;\n};\n\n// Example usage\nconst userService = new UserService();\n\nasync function example() {\n  // Create a new user\n  const newUser = await userService.create({\n    email: 'john.doe@example.com',\n    firstName: 'John',\n    lastName: 'Doe',\n    role: UserRole.USER\n  });\n\n  console.log('Created user:', newUser);\n}\n```",
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "19",
      content: "Show me a SQL query example?",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: "20",
      content:
        "Here's a comprehensive SQL example with complex queries:\n```sql\n-- Advanced SQL queries with CTEs, window functions, and joins\n\n-- Create sample tables\nCREATE TABLE departments (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    budget DECIMAL(12, 2) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE employees (\n    id SERIAL PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    salary DECIMAL(10, 2) NOT NULL,\n    hire_date DATE NOT NULL,\n    department_id INTEGER REFERENCES departments(id),\n    manager_id INTEGER REFERENCES employees(id),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE projects (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    description TEXT,\n    start_date DATE NOT NULL,\n    end_date DATE,\n    budget DECIMAL(12, 2) NOT NULL,\n    status VARCHAR(20) DEFAULT 'planning',\n    department_id INTEGER REFERENCES departments(id)\n);\n\nCREATE TABLE employee_projects (\n    employee_id INTEGER REFERENCES employees(id),\n    project_id INTEGER REFERENCES projects(id),\n    assigned_date DATE DEFAULT CURRENT_DATE,\n    role VARCHAR(50),\n    PRIMARY KEY (employee_id, project_id)\n);\n\n-- Insert sample data\nINSERT INTO departments (name, budget) VALUES \n('Engineering', 2000000.00),\n('Marketing', 800000.00),\n('Sales', 1200000.00),\n('HR', 600000.00);\n\nINSERT INTO employees (first_name, last_name, email, salary, hire_date, department_id, manager_id) VALUES \n('John', 'Smith', 'john.smith@company.com', 120000.00, '2020-01-15', 1, NULL),\n('Jane', 'Doe', 'jane.doe@company.com', 95000.00, '2020-03-22', 1, 1),\n('Alice', 'Johnson', 'alice.johnson@company.com', 85000.00, '2021-02-10', 1, 1),\n('Bob', 'Wilson', 'bob.wilson@company.com', 78000.00, '2021-06-01', 2, NULL),\n('Carol', 'Brown', 'carol.brown@company.com', 82000.00, '2019-11-12', 3, NULL);\n\n-- Complex query: Employee analytics with window functions\nWITH employee_stats AS (\n    SELECT \n        e.id,\n        e.first_name,\n        e.last_name,\n        e.salary,\n        d.name as department_name,\n        d.budget as department_budget,\n        e.hire_date,\n        \n        -- Window functions for analytics\n        ROW_NUMBER() OVER (ORDER BY e.salary DESC) as salary_rank_global,\n        ROW_NUMBER() OVER (PARTITION BY d.id ORDER BY e.salary DESC) as salary_rank_dept,\n        \n        AVG(e.salary) OVER (PARTITION BY d.id) as avg_dept_salary,\n        MAX(e.salary) OVER (PARTITION BY d.id) as max_dept_salary,\n        MIN(e.salary) OVER (PARTITION BY d.id) as min_dept_salary,\n        \n        COUNT(*) OVER (PARTITION BY d.id) as dept_employee_count,\n        \n        LAG(e.salary, 1) OVER (PARTITION BY d.id ORDER BY e.hire_date) as prev_hire_salary,\n        LEAD(e.salary, 1) OVER (PARTITION BY d.id ORDER BY e.hire_date) as next_hire_salary,\n        \n        -- Calculate tenure\n        EXTRACT(YEAR FROM AGE(CURRENT_DATE, e.hire_date)) * 12 + \n        EXTRACT(MONTH FROM AGE(CURRENT_DATE, e.hire_date)) as tenure_months,\n        \n        -- Salary percentile within department\n        PERCENT_RANK() OVER (PARTITION BY d.id ORDER BY e.salary) as salary_percentile\n        \n    FROM employees e\n    JOIN departments d ON e.department_id = d.id\n),\n\n-- Department performance metrics\ndepartment_metrics AS (\n    SELECT \n        d.id,\n        d.name,\n        d.budget,\n        COUNT(e.id) as employee_count,\n        SUM(e.salary) as total_salary_cost,\n        AVG(e.salary) as avg_salary,\n        STDDEV(e.salary) as salary_stddev,\n        d.budget - SUM(e.salary) as remaining_budget,\n        ROUND((SUM(e.salary) / d.budget * 100), 2) as budget_utilization_pct,\n        \n        -- Project metrics\n        COUNT(DISTINCT p.id) as project_count,\n        COUNT(DISTINCT CASE WHEN p.status = 'active' THEN p.id END) as active_projects,\n        SUM(p.budget) as total_project_budget\n        \n    FROM departments d\n    LEFT JOIN employees e ON d.id = e.department_id\n    LEFT JOIN projects p ON d.id = p.department_id\n    GROUP BY d.id, d.name, d.budget\n),\n\n-- Employee project workload\nemployee_workload AS (\n    SELECT \n        e.id,\n        e.first_name,\n        e.last_name,\n        COUNT(ep.project_id) as project_count,\n        STRING_AGG(p.name, ', ' ORDER BY p.start_date) as projects,\n        AVG(p.budget) as avg_project_budget\n    FROM employees e\n    LEFT JOIN employee_projects ep ON e.id = ep.employee_id\n    LEFT JOIN projects p ON ep.project_id = p.id\n    GROUP BY e.id, e.first_name, e.last_name\n)\n\n-- Main query combining all CTEs\nSELECT \n    es.first_name,\n    es.last_name,\n    es.department_name,\n    es.salary,\n    es.salary_rank_global,\n    es.salary_rank_dept,\n    ROUND(es.avg_dept_salary, 2) as avg_dept_salary,\n    ROUND(es.salary_percentile * 100, 1) as salary_percentile,\n    es.tenure_months,\n    \n    -- Department metrics\n    dm.employee_count as dept_size,\n    dm.budget_utilization_pct,\n    dm.active_projects as dept_active_projects,\n    \n    -- Workload metrics\n    ew.project_count,\n    ew.projects,\n    \n    -- Performance indicators\n    CASE \n        WHEN es.salary > es.avg_dept_salary * 1.2 THEN 'High Performer'\n        WHEN es.salary > es.avg_dept_salary THEN 'Above Average'\n        WHEN es.salary > es.avg_dept_salary * 0.8 THEN 'Average'\n        ELSE 'Below Average'\n    END as performance_category,\n    \n    CASE \n        WHEN es.tenure_months > 36 THEN 'Senior'\n        WHEN es.tenure_months > 12 THEN 'Experienced'\n        ELSE 'Junior'\n    END as seniority_level\n    \nFROM employee_stats es\nJOIN department_metrics dm ON es.department_name = dm.name\nJOIN employee_workload ew ON es.id = ew.id\nORDER BY es.department_name, es.salary_rank_dept;\n\n-- Additional useful queries\n\n-- Find employees who earn more than their department average\nSELECT \n    e.first_name,\n    e.last_name,\n    e.salary,\n    dept_avg.avg_salary,\n    ROUND((e.salary - dept_avg.avg_salary) / dept_avg.avg_salary * 100, 2) as pct_above_avg\nFROM employees e\nJOIN (\n    SELECT \n        department_id,\n        AVG(salary) as avg_salary\n    FROM employees\n    GROUP BY department_id\n) dept_avg ON e.department_id = dept_avg.department_id\nWHERE e.salary > dept_avg.avg_salary\nORDER BY pct_above_avg DESC;\n\n-- Project timeline and resource allocation\nSELECT \n    p.name as project_name,\n    p.start_date,\n    p.end_date,\n    p.budget,\n    p.status,\n    d.name as department,\n    COUNT(ep.employee_id) as assigned_employees,\n    STRING_AGG(e.first_name || ' ' || e.last_name, ', ') as team_members,\n    SUM(e.salary) / 12 * \n        EXTRACT(MONTH FROM AGE(COALESCE(p.end_date, CURRENT_DATE), p.start_date)) as estimated_salary_cost\nFROM projects p\nJOIN departments d ON p.department_id = d.id\nLEFT JOIN employee_projects ep ON p.id = ep.project_id\nLEFT JOIN employees e ON ep.employee_id = e.id\nGROUP BY p.id, p.name, p.start_date, p.end_date, p.budget, p.status, d.name\nORDER BY p.start_date DESC;\n```",
      sender: "assistant",
      timestamp: new Date().toISOString(),
    },
  ]);

  useTheme();

  // Función para manejar el envío de nuevos mensajes
  const handleSendMessage = (content: string) => {
    if (content.trim() === "") return; // No enviar mensajes vacíos

    // Crear el nuevo mensaje del usuario
    const newUserMessage = {
      id: Date.now().toString(), // ID único basado en timestamp
      content: content.trim(),
      sender: "user" as const,
      timestamp: new Date().toISOString(),
    };

    // Agregar el mensaje del usuario
    setMessages((prev) => [...prev, newUserMessage]);

    // Aquí podrías agregar lógica para generar una respuesta automática del bot
    // Por ejemplo, después de un delay:
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        content: "Gracias por tu mensaje. Esta es una respuesta automática.",
        sender: "assistant" as const,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="absolute top-0 right-0 p-4 z-10">
          <ThemeToggle />
        </div>
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center ml-64">
          <div className="w-[42rem] flex flex-col gap-4 h-full max-h-[calc(100vh-2rem)]">
            <div className="flex-1 min-h-0 ">
              <ChatArea messages={Messages} />
            </div>
            <div className="flex-shrink-0">
              <Input onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
