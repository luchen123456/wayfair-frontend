import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { 
  Search, BarChart2, MessageSquare, TrendingUp, AlertTriangle, 
  CheckCircle2, Database, Settings, ChevronDown, Send, Sparkles
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Data
const priceData = [
  { name: '$0-50', count: 12 },
  { name: '$51-100', count: 45 },
  { name: '$101-150', count: 86 },
  { name: '$151-200', count: 34 },
  { name: '$200+', count: 15 },
];

const topCompetitors = [
  { id: 1, name: "Modern Velvet Accent Chair", brand: "LuxeHome", price: 129.99, rating: 4.8, reviews: 1245 },
  { id: 2, name: "Ergonomic Office Chair with Lumbar Support", brand: "WorkPro", price: 145.00, rating: 4.6, reviews: 892 },
  { id: 3, name: "Mid-Century Dining Chair Set of 2", brand: "RetroVibe", price: 110.50, rating: 4.7, reviews: 654 },
  { id: 4, name: "Minimalist Lounge Chair", brand: "ScandiDesign", price: 189.00, rating: 4.9, reviews: 432 },
];

const positiveKeywords = ["Easy to assemble", "Comfortable", "Looks expensive", "Sturdy", "Fast shipping"];
const negativeKeywords = ["Smaller than expected", "Color mismatch", "Missing parts", "Firm seat", "Instructions unclear"];

const opportunities = [
  "High demand in the $101-$150 price range with relatively low competition for premium materials.",
  "Customers frequently praise 'easy assembly', making this a key selling point to emphasize.",
  "Lack of ergonomic options in the mid-century modern style presents a product gap."
];

const risks = [
  "Several top competitors have over 1000 reviews, creating a high barrier to entry for generic designs.",
  "Frequent complaints about 'color mismatch' suggest a need for highly accurate product photography.",
  "Shipping costs for bulky chairs might eat into profit margins if not optimized."
];

const exampleQuestions = [
  "这个类目的头部品牌集中度如何？",
  "消费者对材质的偏好有哪些？",
  "如果定价在 $160，有什么差异化建议？"
];

export default function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                Wayfair 市场调研 Agent
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                基于离线 HTML 解析、竞品分析与 AI 总结的单类目调研助手
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end max-w-md">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                Single Category
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Offline HTML Parsing
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                Competitor Analysis
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                AI Insight
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Panel: Task Input */}
          <div className="w-full lg:w-1/3 flex-shrink-0 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-medium text-slate-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-slate-500" />
                任务配置
              </h2>
              
              <div className="space-y-5">
                {/* Goal Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">调研目标</label>
                  <div className="relative">
                    <select className="block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border appearance-none bg-white">
                      <option>竞品分析</option>
                      <option>评论洞察</option>
                      <option>市场概览</option>
                      <option>进入建议</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Category Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">类目名称</label>
                  <input 
                    type="text" 
                    defaultValue="Accent Chairs"
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-slate-300 rounded-md border px-3 py-2" 
                    placeholder="例如: Accent Chairs"
                  />
                </div>

                {/* Analysis Focus */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">分析重点</label>
                  <div className="space-y-2">
                    {['价格带', '评分与评论数', '评论关键词', '产品规格/材质', '变体信息'].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={`focus-${idx}`}
                            name={`focus-${idx}`}
                            type="checkbox"
                            defaultChecked={idx < 3}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-slate-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={`focus-${idx}`} className="font-medium text-slate-700">
                            {item}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top N */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">分析 Top N 商品</label>
                  <input 
                    type="number" 
                    defaultValue={50}
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-slate-300 rounded-md border px-3 py-2" 
                  />
                </div>

                {/* Data Source Info */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1">
                    <Database className="w-3 h-3" /> 数据源信息
                  </h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">来源</dt>
                      <dd className="font-medium text-slate-900">本地离线 HTML</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">类目页数</dt>
                      <dd className="font-medium text-slate-900">12 页</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">详情页数量</dt>
                      <dd className="font-medium text-slate-900">560 个</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">最近更新</dt>
                      <dd className="font-medium text-slate-900">2023-10-25 14:30</dd>
                    </div>
                  </dl>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 transition-colors cursor-pointer"
                >
                  {isAnalyzing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      分析中...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      开始分析
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Analysis Results */}
          <div className="w-full lg:w-2/3 space-y-6">
            {showResults ? (
              <>
                {/* Market Overview & Final Recommendation Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Market Overview */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-base font-medium text-slate-900 mb-4 flex items-center gap-2">
                      <BarChart2 className="w-5 h-5 text-blue-500" />
                      市场概览
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500">样本商品数</p>
                        <p className="text-2xl font-semibold text-slate-900">560</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">平均价格</p>
                        <p className="text-2xl font-semibold text-slate-900">$134.50</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">价格区间</p>
                        <p className="text-lg font-medium text-slate-900">$45 - $399</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">平均评分/评论</p>
                        <p className="text-lg font-medium text-slate-900">4.6 <span className="text-sm text-slate-500 font-normal">(420条)</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Final Recommendation */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10"></div>
                    <h3 className="text-base font-medium text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      最终建议
                    </h3>
                    <div className="mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-800">
                        建议进入 (Recommend Entry)
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      该类目需求稳定，虽然头部有一定垄断，但在 $100-$150 中端价格带存在材质和设计的差异化空间。建议主打“易组装”和“高颜值”，避开与头部品牌在基础款上的直接价格战。
                    </p>
                  </div>
                </div>

                {/* Price Range Chart */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-base font-medium text-slate-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-500" />
                    价格带分析
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={priceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                        <Tooltip 
                          cursor={{ fill: '#f1f5f9' }}
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                          {priceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.count > 50 ? '#6366f1' : '#94a3b8'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-slate-500 text-center mt-2">商品数量分布 (重点关注 $101-$150 区间)</p>
                </div>

                {/* Top Competitors */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-0 overflow-hidden">
                  <div className="p-6 border-b border-slate-200">
                    <h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
                      <Search className="w-5 h-5 text-amber-500" />
                      重点竞品 (Top 4)
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">商品信息</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">价格</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">评分</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">评论数</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        {topCompetitors.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-900 truncate max-w-[250px]">{item.name}</span>
                                <span className="text-xs text-slate-500">{item.brand}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm text-slate-900">
                                <span className="text-amber-400 mr-1">★</span> {item.rating}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                              {item.reviews.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Review Keywords & Risks/Opportunities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Review Keywords */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-base font-medium text-slate-900 mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-purple-500" />
                      评论关键词洞察
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">正向关键词 (Positive)</h4>
                        <div className="flex flex-wrap gap-2">
                          {positiveKeywords.map(kw => (
                            <span key={kw} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">负向关键词 (Negative)</h4>
                        <div className="flex flex-wrap gap-2">
                          {negativeKeywords.map(kw => (
                            <span key={kw} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risks & Opportunities */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-base font-medium text-slate-900 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      风险与机会
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Opportunities
                        </h4>
                        <ul className="space-y-1.5">
                          {opportunities.map((opp, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start">
                              <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                              <span className="flex-1">{opp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-slate-100">
                        <h4 className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Risks
                        </h4>
                        <ul className="space-y-1.5">
                          {risks.map((risk, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start">
                              <span className="text-rose-400 mr-2 mt-0.5">•</span>
                              <span className="flex-1">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                <BarChart2 className="w-12 h-12 mb-4 text-slate-300" />
                <p className="text-lg font-medium text-slate-500">等待分析</p>
                <p className="text-sm mt-1">请在左侧配置任务并点击“开始分析”</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Panel: Continue Asking */}
      {showResults && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MessageSquare className="w-4 h-4" />
                <span>基于当前分析结果继续追问：</span>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    className="block w-full pl-4 pr-12 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-slate-300 rounded-lg border bg-slate-50 focus:bg-white transition-colors outline-none"
                    placeholder="例如：帮我写一段针对这个类目的产品开发需求文档..."
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <button className="p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((q, i) => (
                  <button 
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200 cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Padding for fixed bottom bar */}
      {showResults && <div className="h-48"></div>}
    </div>
  );
}
