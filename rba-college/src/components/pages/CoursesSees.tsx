import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import courses from '../../DataSource/DataSets';
import '../../styles/pages/Courseslist.css';

// Constants
const ITEMS_PER_PAGE = 12;
const PAGE_CHANGE_SCROLL_TOP = 200; // How far to scroll up on page change

// Type definitions
type Course = {
  id: string;
  name: string;
  bannerImage?: string;
  specialisation?: string;
  category?: string;
  duration?: string;
  eligibility?: string;
  university?: string;
  mode?: string;
  examPattern?: string;
  documentsRequired?: string[];
  fee?: string;
  isOnline?: boolean;
  description?: string;
  additionalInfo?: string | string[];
  examFee?: string;
};

type HeroSectionProps = {
  courseCount: number;
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

type HighlightCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type FilterBarProps = {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onPageReset: () => void;
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type CourseCardProps = {
  course: Course;
  index: number;
};

const CourseList: React.FC = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Programs');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    let results = courses;

    // Filter by category
    if (activeFilter !== 'All Programs') {
      results = results.filter(course => course.id === activeFilter);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      results = results.filter(course =>
        course.name.toLowerCase().includes(term) ||
        (course.specialisation?.toLowerCase().includes(term)) ||
        (Array.isArray(course.additionalInfo) && 
          course.additionalInfo.some(info => info.toLowerCase().includes(term)))
  )}
  
    return results;
  }, [searchTerm, activeFilter]);

  // Pagination logic
  const { paginatedCourses, totalPages } = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return {
      paginatedCourses: filteredCourses.slice(start, start + ITEMS_PER_PAGE),
      totalPages: Math.ceil(filteredCourses.length / ITEMS_PER_PAGE)
    };
  }, [filteredCourses, currentPage]);

  // Event handlers
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  }, []);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page on filter change
  }, []);

  const handlePageChange = useCallback((page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ 
        top: PAGE_CHANGE_SCROLL_TOP, 
        behavior: 'smooth' 
      });
    }
  }, [totalPages]);

  return (
    <div className="modern-course-list">
      <HeroSection 
        courseCount={courses.length} 
        searchTerm={searchTerm} 
        onSearchChange={() => handleSearchChange} 
      />
      
      
      <div className="results-count">
        <p>{filteredCourses.length} {filteredCourses.length === 1 ? 'program' : 'programs'} found</p>
        {searchTerm && (
          <button 
            className="clear-filters"
            onClick={() => {
              setSearchTerm('');
              setActiveFilter('All Programs');
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {paginatedCourses.length > 0 ? (
        <>
          <motion.div 
            className="course-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {paginatedCourses.map((course, index) => (
              <CourseCard 
                key={`${course.id}-${index}`} 
                course={course} 
                index={index} 
              />
            ))}
          </motion.div>

          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          )}
        </>
      ) : (
        <div className="no-results">
          <h3>No programs found</h3>
          <p>Try adjusting your search or filters</p>
          <button 
            className="reset-button"
            onClick={() => {
              setSearchTerm('');
              setActiveFilter('All Programs');
            }}
          >
            Reset filters
          </button>
        </div>
      )}

      <ProgramHighlights />
    </div>
  );
};

// Sub-components
const HeroSection: React.FC<HeroSectionProps> = ({ courseCount, searchTerm, onSearchChange }) => (
  <div className="hero-section">
    <div className="hero-content">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shape Your Future
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Discover {courseCount} programs designed to launch your career
      </motion.p>
      <motion.div 
        className="search-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Search courses by name, specialization..."
          value={searchTerm}
          onChange={() => onSearchChange}
          aria-label="Search courses"
        />
        <i className="fas fa-search"></i>
      </motion.div>
    </div>
  </div>
);

const FilterBar: React.FC<FilterBarProps> = ({ 
  categories, 
  activeFilter, 
  onFilterChange,
  onPageReset 
}) => (
  <motion.div 
    className="course-filter"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="filter-tags">
      {categories.map(category => (
        <motion.button
          key={category}
          className={activeFilter === category ? 'active' : ''}
          onClick={() => {
            onFilterChange(category);
            onPageReset();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Show limited page numbers for better UX with many pages
  const visiblePages = useMemo(() => {
    const pages = [];
    const maxVisible = 5; // Maximum pages to show at once
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const leftOffset = Math.floor(maxVisible / 2);
      const rightOffset = Math.ceil(maxVisible / 2) - 1;
      
      let start = currentPage - leftOffset;
      let end = currentPage + rightOffset;
      
      if (start < 1) {
        start = 1;
        end = maxVisible;
      }
      
      if (end > totalPages) {
        start = totalPages - (maxVisible - 1);
        end = totalPages;
      }
      
      for (let i = start; i <= end; i++) pages.push(i);
    }
    
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="pagination">
      <motion.button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Previous
      </motion.button>
      
      {visiblePages[0] > 1 && (
        <>
          <button 
            className={currentPage === 1 ? 'active' : ''}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {visiblePages[0] > 2 && <span className="ellipsis">...</span>}
        </>
      )}
      
      {visiblePages.map(page => (
        <motion.button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {page}
        </motion.button>
      ))}
      
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="ellipsis">...</span>
          )}
          <button 
            className={currentPage === totalPages ? 'active' : ''}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <motion.button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </div>
  );
};

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => (
  <motion.div 
    className="course-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
  >
    <div className="card-content">
      <div className="card-header">
        <span className="course-type">{course.specialisation}</span>
        <span className="duration">{course.duration}</span>
      </div>
      <h3>{course.name}</h3>
      <p className="description">
        {course.description || 'Comprehensive program designed for future professionals'}
      </p>
      <div className="card-footer">
        <div className="course-meta">
          {course.fee && <span className="fee">{course.fee}</span>}
          {course.isOnline && (
            <span className="online-badge">
              <i className="fas fa-globe"></i> Online
            </span>
          )}
          {course.mode && !course.isOnline && (
            <span className="mode-badge">{course.mode}</span>
          )}
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`/course/${course.id}`} className="explore-btn">
            Explore <i className="fas fa-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const ProgramHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Industry Connections",
      description: "Direct pathways to top employers through our partnerships",
      icon: <i className="fas fa-handshake"></i>
    },
    {
      title: "Expert Faculty",
      description: "Learn from leaders in their fields with real-world experience",
      icon: <i className="fas fa-chalkboard-teacher"></i>
    },
    {
      title: "Hands-on Learning",
      description: "Practical skills development through labs and projects",
      icon: <i className="fas fa-laptop-code"></i>
    },
    {
      title: "Career Support",
      description: "Dedicated career services to help you land your dream job",
      icon: <i className="fas fa-briefcase"></i>
    }
  ];

  return (
    <section className="program-highlights">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Why Choose Our Programs?
      </motion.h2>
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            title={highlight.title}
            description={highlight.description}
            icon={highlight.icon}
          />
        ))}
      </div>
    </section>
  );
};

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, icon }) => (
  <motion.div 
    className="highlight-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="icon-circle">
      {icon || <i className="fas fa-star"></i>}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default CourseList;