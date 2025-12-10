'use client';

import { useState } from 'react';

export default function ConvertPage() {
  const [message, setMessage] = useState('');
  const [senderMbti, setSenderMbti] = useState('');
  const [receiverMbti, setReceiverMbti] = useState('');
  const [results, setResults] = useState<{ tone: string; content: string; explanation: string }[]>([]);

  const mbtiTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];

  const handleConvert = () => {
    // TODO: API 연동
    setResults([
      { tone: '공손한', content: '안녕하세요, 혹시 시간 되실 때 이 부분 확인 부탁드려도 될까요?', explanation: 'ISTJ는 예의 바른 표현을 선호합니다.' },
      { tone: '캐주얼한', content: '이거 확인 좀 해줄 수 있어?', explanation: '친근한 톤으로 부담 없이 요청합니다.' },
      { tone: '간결한', content: '확인 요청드립니다.', explanation: '핵심만 간단히 전달합니다.' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-purple-500 mb-2">메시지 변환</h1>
        <p className="text-gray-500">상대방의 MBTI에 맞게 메시지를 변환해드려요</p>
      </div>

      {/* 입력 폼 */}
      <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">내 MBTI</label>
            <select
              value={senderMbti}
              onChange={(e) => setSenderMbti(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="">선택하세요</option>
              {mbtiTypes.map(mbti => (
                <option key={mbti} value={mbti}>{mbti}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">상대방 MBTI</label>
            <select
              value={receiverMbti}
              onChange={(e) => setReceiverMbti(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="">선택하세요</option>
              {mbtiTypes.map(mbti => (
                <option key={mbti} value={mbti}>{mbti}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">변환할 메시지</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="변환하고 싶은 메시지를 입력하세요..."
            className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 h-24 resize-none"
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          변환하기
        </button>
      </div>

      {/* 결과 */}
      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-700">변환 결과</h2>
          {results.map((result, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {result.tone}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{result.content}</p>
              <p className="text-sm text-gray-400">{result.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}